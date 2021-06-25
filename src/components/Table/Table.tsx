import { FC, useState } from 'react'
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ThemeProvider,
  Checkbox,
  TableSortLabel,
} from '@material-ui/core'

import { ITableProps } from './types'
import { Resize, InnerCell } from './styles'
import { useHandleRowCheck, useResize, useTableTheme, useHandleScroll } from './hooks'

export const Table: FC<ITableProps> = ({ columns, data, showCheckbox = false }) => {
  const [rows, setRows] = useState(data)
  const resize = useResize()
  const handleRowCheck = useHandleRowCheck(setRows)
  const handleScroll = useHandleScroll()
  const theme = useTableTheme()

  const isSomeChecked = rows.some(({ checked }) => checked)
  const isIndeterminate = isSomeChecked && !rows.every(({ checked }) => checked)

  return (
    <ThemeProvider theme={theme}>
      <TableContainer onScroll={handleScroll}>
        <MuiTable>
          <TableHead {...resize}>
            <TableRow>
              {showCheckbox ? (
                <TableCell data-checkbox>
                  <Checkbox
                    checked={isSomeChecked}
                    indeterminate={isIndeterminate}
                    onChange={handleRowCheck}
                    inputProps={{ name: 'all' }}
                  />
                </TableCell>
              ) : null}
              {columns.map(({ name, field, align }, i) => (
                <TableCell key={i} data-freeze={i === 0 || null} align={align}>
                  <TableSortLabel component="div">
                    <span className="text">{name ?? field}</span>
                  </TableSortLabel>
                  <Resize data-resize />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ checked, ...row }, rowIndex) => (
              <TableRow key={rowIndex}>
                {showCheckbox ? (
                  <TableCell data-checkbox>
                    <Checkbox
                      checked={Boolean(checked)}
                      onChange={handleRowCheck}
                      inputProps={{ name: String(rowIndex) }}
                    />
                  </TableCell>
                ) : null}
                {columns.map(({ field, align }, i) => (
                  <TableCell key={i} data-freeze={i === 0 || null} align={align}>
                    <InnerCell>{row[field]}</InnerCell>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </ThemeProvider>
  )
}
