import * as React from 'react'

import sup from 'superagent'

import { currentUrl } from 'utils'
import { useToken, useSnackbar } from 'hooks'
import { StoreType } from '../store'

export { useHandleChange } from './useHandleChange'

const useCreteFile = () => {
  const token = useToken()
  return async (data: undefined | FormData) =>
    sup
      .post(currentUrl('1029695/content'))
      .auth(token.access, { type: 'bearer' })
      .send(data)
      .then((res) => res.body.data)
}

const usePostImport = () => {
  const token = useToken()
  return async (url = '', fileId: number) =>
    sup
      .post(currentUrl(`withdrawal/import${url}`))
      .auth(token.access, { type: 'bearer' })
      .query({ fileId })
}

export const useFetch = (store: StoreType) => {
  const msg = useSnackbar()

  const createFile = useCreteFile()
  const postImport = usePostImport()

  React.useEffect(() => {
    if (store.data)
      (async () => {
        try {
          const { id } = await createFile(store.data)

          await postImport(store.url, id)

          store.success()
        } catch (error) {
          store.fail()
        }
      })()
  }, [store, store.data, createFile, postImport, msg])
}