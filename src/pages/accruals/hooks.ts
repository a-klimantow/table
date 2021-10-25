import odataQuery from 'odata-query'

import { IGrid } from 'types'
import { useFetchRewards } from 'hooks'
import { useGrid } from 'components/grid'
import { columns } from './columns'

const containsLower = (str = '') => ({ contains: str.toLowerCase() })

const useQuery = (grid: IGrid) =>
  odataQuery({
    top: grid.top,
    skip: grid.skip,
    filter: grid.search && {
      'tolower(file/file_name)': containsLower(grid.search),
    },
  }).slice(1)

export const useAccrualsGrid = () => {
  const grid = useGrid(columns)
  const query = useQuery(grid)
  useFetchRewards('withdrawal-arbitrary', grid, query)

  return grid
}
