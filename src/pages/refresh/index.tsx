import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useLocation, useHistory } from 'react-router-dom'
// 
import { useSuperagent, useAppStore } from 'hooks'
import { IUser } from 'types'

export const Refresh = () => {
  const history = useHistory()
  const { hash } = useLocation()
  const refresh = useSuperagent().refresh
  const app = useAppStore()

  const isRefresh = hash.endsWith('refresh')

  React.useEffect(() => {
    if (isRefresh)
      (async () => {
        try {
          const { body } = await refresh.then()
          const {refresh_token, token, ...user} =body.data as IUser
          app.updateUser(user)
          app.updateToken({access:token, refresh: refresh_token})
        } catch (error) {
          app.clear()
        }
      })()
  }, [refresh, history, isRefresh, app])

  return <Mui.Backdrop open={isRefresh} sx={{ zIndex: 'modal' }} />
}
