import { useAppStore, useUrl } from 'hooks'
import { useEffect } from 'react'
import sup from 'superagent'

import { StateType } from './useState'

export function useImport(state: StateType) {
  const { file, activePay } = state
  const { user } = useAppStore()
  const url = useUrl(
    activePay === 'WebMoney'
      ? 'withdrawal/importwebmoney'
      : 'withdrawal/importyookassa'
  )
  const id = file?.id

  const request = sup
    .post(url)
    .auth(user.token, { type: 'bearer' })
    .query({ fileId: id })

  useEffect(() => {
    id && request.then(console.log).catch(console.log)
    return () => request.abort()
  }, [id, request])
}
