import { FC, useMemo, memo } from 'react'
import {
  ThemeProvider,
  createTheme,
  TableRow,
  TableCell,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'

import { TableProps } from './Table'
import { observer } from 'mobx-react-lite'

export const Provider: FC = ({ children }) => {
  const theme = useMemo(() => createTheme({}), [])
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

type HeadListProps = TableProps['table']['head']

export const HeadList = memo<{ items: HeadListProps }>(({ items }) => (
  <TableRow>
    {items.map((item) => (
      <HeadItem key={item.key} item={item} />
    ))}
  </TableRow>
))

type HeadItemProps = TableProps['table']['head'][number]

const HeadItem = observer<{ item: HeadItemProps }>(({ item }) => (
  <TableCell
    sx={{
      display: item.hidden ? 'none' : 'table-cell',
    }}
  >
    {item.name}
  </TableCell>
))

export const Loader = observer<{ show: boolean }>(({ show }) => (
  <Backdrop
    open={show}
    sx={{
      position: 'absolute',
      bgcolor: 'transparent',
    }}
  >
    <CircularProgress />
  </Backdrop>
))
