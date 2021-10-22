import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IAccrualItem } from 'types'
import { useRewardsGet } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>
type I = IAccrualItem

export const useFormatedColumns = (grid: G) =>
  React.useEffect(() => {
    grid.cols[0].renderCell = (item: I) => {
      return item.file.file_name
    }

    grid.cols[2].renderCell = (item: I) => {
      return new Date(item.created).toLocaleString()
    }

    grid.cols[3].renderCell = (item: I) => {
      return item.amount.toLocaleString()
    }
  }, [grid])

export const useFetch = (grid: G) => {
  const getData = useRewardsGet()
  const query = useQuery(grid)

  React.useEffect(() => {
    grid.setLodaing(true)

    getData(query).then(({ items, count }) => {
      grid.update(count, items)
      grid.setLodaing(false)
    })
  }, [grid, getData, query])
}

const useQuickFilter = (search = '') => {
  if (!search) return {}
  return f
    .or()
    .eq('author_id', Number(search) || 0)
    .contains('file/file_name', search)
    .toString()
}

const useQuery = (grid: G) => {
  const filter = useQuickFilter(grid.search)
  return {
    $top: grid.top,
    $skip: grid.skip,
    $filter: filter,
  }
}
