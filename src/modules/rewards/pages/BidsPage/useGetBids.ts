import React from 'react'

import { useSuperagent } from 'hooks'
import { StoreType } from './useBidsStore'

export const useGetBids = (store: StoreType) => {
  const sa = useSuperagent('withdrawal' + store.query)

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await sa.then()
        const {
          items,
          metadata: { pagination },
        } = res.body
        store.success({ type: 'get', items, count: pagination.total_count })
      } catch (error) {}
    })()
    return () => sa.abort()
  }, [store, sa])
}
