import * as React from 'react'
import * as Mui from '@material-ui/core'
import buildQuery from 'odata-query'
import { useLocalObservable } from 'mobx-react-lite'
//
import { IRequestItem, IResponse } from 'types'
import { useFetchRewards } from 'hooks'

// data
type D = { items: IRequestItem[]; count: number }

export const useData = () =>
  useLocalObservable(() => ({
    data: null as null | D,

    update(data: D) {
      this.data = data
    },

    get items(): D['items'] {
      return this.data?.items ?? []
    },

    get count(): D['count'] {
      return this.data?.count ?? 0
    },
  }))

// query

type Q = Pick<Mui.TablePaginationProps, 'page' | 'rowsPerPage'>

export const useQuery = ({ page, rowsPerPage }: Q): string => {
  return buildQuery({
    top: rowsPerPage,
    skip: page * rowsPerPage,
  })
}

// fetch

type DT = ReturnType<typeof useData>

export const useFetchRequests = (query: string, data: DT) => {
  const { requests } = useFetchRewards(query)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await requests.then()
        const { items, count } = getData(response)
        data.update({ items, count })
      } catch (error) {}
    })()
    return () => requests.abort()
  }, [requests, data])
}

function getData(response: IResponse<IRequestItem>) {
  const { items, metadata } = response.body
  const { total_count } = metadata.pagination
  return { items, count: total_count }
}
