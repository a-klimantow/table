import { useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { RewardsPathesType } from './types'

const LINKS = ['request', 'reports', 'profit']

export const useRewardsPathes = (): RewardsPathesType => {
  const { path } = useRouteMatch()

  return useMemo(
    () => ({
      ...(LINKS.reduce(
        (obj, link) => ({ ...obj, [link]: `${path}/${link}` }),
        {}
      ) as RewardsPathesType),
      rewards: path,
    }),
    [path]
  )
}
