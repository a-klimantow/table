import { useMemo } from 'react'
import { useHistory } from 'react-router'
//
import { PageType as P } from 'types'
import { useAppStore } from 'hooks'
import { name } from 'assets'

export { useMenu } from 'hooks'

const items: P[] = ['user_settings', 'logout']

export const useItems = () => {
  const history = useHistory()
  return useMemo(
    () =>
      items.map((i) => ({
        name: name(i),
        push: () => history.push(`#${i}`),
      })),
    [history]
  )
}

export const useUserName = () => useAppStore().user.name
