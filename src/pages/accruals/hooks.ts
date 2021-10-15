import * as React from 'react'
import f from 'odata-filter-builder'
//
import { IAccrualItem, IGridRow, IGridCol } from 'types'
import { useFetchRewards } from 'hooks'
import { useGrid } from 'components/grid'

type G = ReturnType<typeof useGrid>
type I = IAccrualItem
type K = keyof I

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
  const fetch = useFetchRewards('withdrawal-arbitrary')
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
      .finally(() => grid.setLodaing(false))
  }, [fetch, grid, filter, grid.top, grid.skip])

  return grid
}

function createRows(items: I[], cols: IGridCol[]): IGridRow[] {
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
    $filter: f.or().contains('file/file_name', grid.search).toString(),
  }
}
