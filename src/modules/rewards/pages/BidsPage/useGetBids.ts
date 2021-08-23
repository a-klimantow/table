import React from 'react'

import { useSuperagent } from 'hooks'
import { StoreType } from './useBidsStore'

export const useGetBids = (store: StoreType) => {
  const sa = useSuperagent('withdrawal' + store.queryString)

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await sa.then()
        store.success(res.body)
      } catch (error) {}
    })()
    return () => sa.abort()
  }, [store, sa])
}
