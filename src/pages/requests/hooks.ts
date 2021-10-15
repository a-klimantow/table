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

  // top & skip
  fetch.query(grid.top)
  fetch.query(grid.skip)

  // quick filter
  const quickFilter = React.useMemo(
    () => createQuickFilter(grid.search),
    [grid.search]
  )

  grid.search && fetch.query({ $filter: quickFilter })

  // fetch
  React.useEffect(() => {
    grid.setLodaing(true)
    fetch
      .then((res) => {
        const { items, metadata } = res.body
        const { total_count } = metadata.pagination

        grid.update(total_count, createRows(items, grid.tableHead))
      })
      .catch(() => null)
      .finally(() => grid.setLodaing(false))
  }, [fetch, grid])

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

function createQuickFilter(str: string): string {
  return f.or().contains('panel_name', str).contains('country', str).toString()
}
