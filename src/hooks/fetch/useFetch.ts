import * as React from 'react'
import sup, { ResponseError as ResErr } from 'superagent'
import { useHistory } from 'react-router-dom'

import { IErrors, IFile } from 'types'
import { currentUrl } from 'utils'
import { useToken, useUser, useNotifications } from 'hooks'

type M = 'get' | 'post' | 'del'

const useFetch = (url = '', method: M = 'get') => sup[method](currentUrl(url))

type Fetch = ReturnType<typeof useFetch>

// ------------ Логин

type D = { email: string; password: string }

export function useFetchLogin() {
  const fetch = useFetch('login', 'post')
  const token = useToken()
  const user = useUser()

  return async (data: D) => {
    fetch.send(data)
    try {
      const { body } = await fetch
      token.update(body)
      user.update(body)
    } catch (error) {
      const { response } = error as ResErr
      if (response) return response.body.errors as IErrors
    }
  }
}

// ------------ Хуки

function useAuth(fetch: Fetch) {
  const token = useToken()
  return fetch.auth(token.access, { type: 'bearer' })
}

function useRedirect(fetch: Fetch) {
  const history = useHistory()
  return fetch.on('error', ({ response }: ResErr) => {
    response?.unauthorized && history.push('/user/refresh/')
  })
}

function useAbort(fetch: Fetch) {
  React.useEffect(() => () => fetch.abort(), [fetch])
  return fetch
}

// ------------ Обновление токена

export function useFetchRefresh() {
  const fetch = useFetch('login/refresh', 'post')
  const token = useToken()
  const user = useUser()
  const history = useHistory()

  fetch.send({ refresh_token: token.refresh })
  useAuth(fetch)

  return async () => {
    try {
      const { body } = await fetch
      token.update(body)
      history.goBack()
    } catch (error) {
      user.update(null)
      token.update(null)
    }
  }
}

// ------------ Выплаты таблица

export function useFetchRewards(url = '', query: object | string) {
  const fetch = useFetch(url)
  fetch.query(query)
  useAuth(fetch)
  useRedirect(fetch)
  useAbort(fetch)

  return () =>
    fetch.then((res) => {
      const { items, metadata } = res.body
      const { total_count } = metadata.pagination
      return {
        items,
        count: total_count,
      }
    })
}

// ------------ Создание файла

function useFetchCreateFile() {
  const fetch = useFetch('1029695/content', 'post')
  useAuth(fetch)
  return (data?: object) => fetch.send(data).then((res) => res.body as IFile)
}

// ------------ Импорт файла

function useFetchImporFile(url = '') {
  const fetch = useFetch(url, 'post')
  useAuth(fetch)
  return (file: IFile) => fetch.query({ fileId: file.id })
}

// ------------ Создание и импорт файла

export function useFetchImport(url = '', data: object | null) {
  const createFile = useFetchCreateFile()
  const importFile = useFetchImporFile(url)
  const ntf = useNotifications()
  const history = useHistory()

  return async () => {
    if (!data) return

    try {
      const file = await createFile(data)
      await importFile(file)
      ntf.success('Импорт завершен успешно')
      history.replace('')
    } catch (err) {
      const { response } = err as ResErr
      response && ntf.error(response.body.errors.message)
    }
  }
}
