import * as React from 'react'

import * as Hook from 'hooks'
import { TableType } from 'components/table'

export const useFetch = (table: TableType) => {
  const fetch = Hook.useFetch('withdrawal')
  Hook.useFetchAuth(fetch)
  Hook.useFetchRedirect(fetch)

  fetch.query(table.query)

  React.useEffect(() => {
    table.setLoader(true)
    ;(async () => {
      try {
        const res = await fetch
        const { items, metadata } = res.body
        const { pagination } = metadata
        table.items = items
        table.top = pagination.top
        table.skip = pagination.skip
        table.setLoader(false)
      } catch (error) {}
    })()
  })
}
