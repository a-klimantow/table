import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IReportItem } from 'types'
import { useRewardsGet } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>

export const useFormateColumns = (grid: G) =>
  React.useEffect(() => {
    grid.cols[1].renderCell = (item: IReportItem) => {
      return new Date(item.processed_date).toLocaleDateString()
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
  return f.or().contains('panel_name', search).toString()
}

const useQuery = (grid: G) => {
  const filter = useQuickFilter(grid.search)
  return {
    $top: grid.top,
    $skip: grid.skip,
    $filter: filter,
  }
}
