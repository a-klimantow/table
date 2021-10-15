import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IRequestItem, IGridRow, IGridCol } from 'types'
import { useFetchRewards } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>

export const useAddRender = (grid: G) =>
  React.useEffect(() => {
    grid.cols[0].renderCell = (item: IRequestItem) => {
      return `${item.panel_name} ${item.country}`
    }
  }, [grid])

export const useFetch = (grid: G) => {
  const fetch = useFetchRewards('withdrawal')
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

type K = keyof IRequestItem

function createRows(items: IRequestItem[], cols: IGridCol[]): IGridRow[] {
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
    $filter: f
      .or()
      .contains('panel_name', grid.search)
      .contains('country', grid.search)
      .toString(),
  }
}
