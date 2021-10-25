import * as React from 'react'
import { ResponseError as ResErr } from 'superagent'
import { useHistory } from 'react-router-dom'

import { IFile } from 'types'
import { useNotifications, useFetch, useFetchAuth } from 'hooks'

// ------------ Создание файла

function useCreateFile() {
  const fetch = useFetch('1029695/content', 'post')
  useFetchAuth(fetch)
  return (data?: object) => fetch.send(data).then((res) => res.body as IFile)
}

// ------------ Импорт файла

function useImporFile(url = '') {
  const fetch = useFetch(url, 'post')
  useFetchAuth(fetch)
  return (file: IFile) => fetch.query({ fileId: file.id })
}

export function useFetchImport(
  url = '',
  data: object | null,
  reset: () => void
) {
  const createFile = useCreateFile()
  const importFile = useImporFile(url)
  const ntf = useNotifications()
  const history = useHistory()

  React.useEffect(() => {
    data &&
      (async () => {
        try {
          const file = await createFile(data)
          reset()
          await importFile(file)
          ntf.success('Импорт завершен успешно')
          history.replace(history.location.pathname)
        } catch (err) {
          reset()
          const { response } = err as ResErr
          response && ntf.error(response.body.errors.message)
        }
      })()
  })
}
