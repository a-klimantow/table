import * as React from 'react'
import * as Mui from '@mui/material'
import { useHistory } from 'react-router-dom'
import sup from 'superagent'
//
import { useToken, useUrl } from 'hooks'
import { IUser } from 'types'

export const Refresh = () => {
  useFetchRefresh()
  return <Mui.Backdrop open sx={{ zIndex: 'modal' }} />
}

function useFetchRefresh() {
  const url = useUrl('login/refresh')
  const token = useToken()
  const history = useHistory()

  const refresh = React.useMemo(
    () =>
      sup
        .post(url)
        .auth(token.access, { type: 'bearer' })
        .send({ refresh_token: token.refresh }),
    [url, token]
  )

  React.useEffect(() => {
    const { location } = history
    if (location.state) {
      console.log('from', location.state)
      ;(async () => {
        try {
          const { body } = await refresh.then()
          const data = body.data as IUser
          token.update({
            token: data.token,
            refresh_token: data.refresh_token,
          })
          history.goBack()
        } catch (error) {
          history.replace('/user/logout/')
        }
      })()
    } else {
      history.goBack()
    }
  }, [refresh, token, history])
}
