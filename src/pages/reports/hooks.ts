import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IReportItem, IGridRow, IGridCol } from 'types'
import { useFetchRewards } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>

export const useAddRender = (grid: G) =>
  React.useEffect(() => {
    grid.cols[1].renderCell = (item: IReportItem) => {
      return new Date(item.processed_date).toLocaleDateString()
    }
  }, [grid])

export const useFetch = (grid: G) => {
  const fetch = useFetchRewards('withdrawal-report')
  const filter = useQuickFilter(grid)

  React.useEffect(() => {
    grid.setLodaing(true)
    fetch
      .query(grid.top)
      .query(grid.skip)
      .query(filter)
      .then((res) => {
        const { items, metadata } = res.body
        const { total_count } = metadata.pagination

        grid.update(total_count, createRows(items, grid.tableHead))
      })
      .catch(() => null)
  }, [fetch, grid, filter, grid.top, grid.skip])

  return grid
}

type K = keyof IReportItem

function createRows(items: IReportItem[], cols: IGridCol[]): IGridRow[] {
  return items.map((item, key) => ({
    key: String(key),
    cells: cols.map((col) => ({
      node: col.renderCell ? col.renderCell(item) : item[col.key as K],
      col,
    })),
  }))
}

const useQuickFilter = (grid: G) => {
  if (!grid.search) return {}
  return {
    $filter: f.or().contains('panel_name', grid.search).toString(),
  }
}
