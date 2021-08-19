import React from 'react'
import { Paper, TablePaginationProps, TablePagination, Stack, Divider } from '@material-ui/core'
import { TableToolbar } from 'components/TableToolbar'

interface TableWrapperProps {
  toolbar?: React.ReactNode
  children: React.ReactNode
  bottom?: React.ReactNode
  pagination?: TablePaginationProps
}

export const TableWrapper = React.memo<TableWrapperProps>(
  ({ toolbar, children, bottom, pagination }) => {
    const template = useGetTemplate({ toolbar, bottom, pagination })
    return (
      <Paper
        sx={{
          overflow: 'hidden',
          height: '100%',
          display: 'grid',
          gridTemplateRows: template,
        }}
      >
        {toolbar && <TableToolbar>{toolbar}</TableToolbar>}
        {children}
        {(bottom || pagination) && <Divider />}
        {(bottom || pagination) && (
          <Stack direction="row" gap={1} px={1} alignItems="center">
            {bottom}
            {pagination && <TablePagination component="div" sx={{ ml: 'auto' }} {...pagination} />}
          </Stack>
        )}
      </Paper>
    )
  }
)

type useGetTemplateType = (props: Omit<TableWrapperProps, 'children'>) => string

const useGetTemplate: useGetTemplateType = ({ toolbar: t, bottom: b, pagination: p }) =>
  React.useMemo(
    () => [t ? '52px' : null, '1fr', b || p ? '52px' : null].filter(Boolean).join(' '),
    [t, b, p]
  )
