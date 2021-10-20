import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IRequestItem } from 'types'
import { useRewardsGet } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>

export const useFormatedColumns = (grid: G) =>
  React.useEffect(() => {
    grid.cols[0].renderCell = (item: IRequestItem) =>
      `${item.panel_name} ${item.country}`
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
    .contains('panel_name', search)
    .contains('country', search)
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
