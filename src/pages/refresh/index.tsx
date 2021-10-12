import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useLocation, useHistory } from 'react-router-dom'
//
import { useSuperagent, useAppContext } from 'hooks'
import { IUser } from 'types'

export const Refresh = () => {
  const history = useHistory()
  const { hash } = useLocation()
  const refresh = useSuperagent().refresh
  const app = useAppContext()

  const isRefresh = hash.endsWith('refresh')

  React.useEffect(() => {
    if (isRefresh)
      (async () => {
        try {
          const { body } = await refresh.then()
          const { refresh_token, token, ...user } = body.data as IUser
          app.user.update(user)
          app.token.update({ token, refresh_token })
        } catch (error) {
          app.user.update(null)
          app.token.update(null)
        }
      })()
  }, [refresh, history, isRefresh, app])

  return <Mui.Backdrop open={isRefresh} sx={{ zIndex: 'modal' }} />
}
