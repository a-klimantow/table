import { memo, ReactNode } from 'react'
import { Stack, TableContainer } from '@material-ui/core'

interface TableSectionProps {
  section: 'toolbar' | 'bottom' | 'table' | 'filters'
  children: ReactNode
}

export const TableSection = memo<TableSectionProps>(({ section, children }) => {
  if (section === 'table')
    return (
      <TableContainer
        sx={{
          flex: 1,
          position: 'relative',
        }}
      >
        {children}
      </TableContainer>
    )

  const isToolbar = section === 'toolbar'
  const isFilters = section === 'filters'
  const isBottom = section === 'bottom'

  return (
    <Stack
      direction="row"
      alignContent="columns"
      alignItems="center"
      flexWrap={isFilters ? 'wrap' : 'unset'}
      height={isFilters ? 'auto' : isToolbar ? 56 : 46}
      bgcolor={isToolbar ? 'grey.300' : 'unset'}
      px={1}
      gap={1}
      borderTop={isBottom ? 1 : 0}
      borderColor="divider"
    >
      {children}
    </Stack>
  )
})
