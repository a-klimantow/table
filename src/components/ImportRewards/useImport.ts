import { useEffect } from 'react'
import sup, { ResponseError } from 'superagent'
import { runInAction } from 'mobx'

import { useAppStore, useUrl, useSnackbar } from 'hooks'
import { StateType } from './useState'

export function useImport(state: StateType) {
  const { user } = useAppStore()
  const msg = useSnackbar()
  const url = useUrl(
    state.pay === 'WebMoney'
      ? 'withdrawal/importwebmoney'
      : 'withdrawal/importyookassa'
  )

  const createFile = sup
    .post('/api/v1/admin/1029695/content')
    .auth(user.token, { type: 'bearer' })
    .send(state.data ?? {})
    .on('error', (res: ResponseError) => {
      if (res?.status === 400) msg(res.response?.body.errors.message, 'error')
    })

  const importFile = sup
    .post(url)
    .auth(user.token, { type: 'bearer' })
    .on('response', console.log)
    .on('error', console.log)

  useEffect(() => {
    if (!state.loading) return
    ;(async () => {
      try {
        const file = await createFile.then((res) => res.body.data)
        await importFile.query({ fileID: file.id }).then()
      } catch (error) {
      } finally {
        runInAction(() => {
          state.data = null
          state.open = false
        })
      }
    })()

    return () => {
      createFile.abort()
      importFile.abort()
    }
  }, [state, createFile, importFile])
}
