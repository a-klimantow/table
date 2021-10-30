import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T } from './types'
import { useTableTheme } from './theme'

import { MenuColumns } from './menu_columns'
import { Search } from './search'

export { useTable } from './hooks/useTable'

export const Table = React.memo<{ table: T }>(({ table, ...props }) => {
  return (
    <Mui.ThemeProvider theme={useTableTheme()}>
      {/* <TableContext.Provider value={table}> */}
      <Mui.Container disableGutters {...props}>
        {/* ---------------- toolbar ---------------- */}
        <Mui.Paper data-section="toolbar" square>
          <MenuColumns table={table} />
          <Search table={table} />
        </Mui.Paper>
        {/* ---------------- table ---------------- */}
        <Mui.TableContainer>
          <Mui.Table>
            <Mui.TableHead>
              <Mui.TableRow>
                {table.columns.map((c) => (
                  <Mobx.Observer key={c.key}>
                    {() =>
                      c.hidden ? null : (
                        <Mui.TableCell>
                          <Mui.TableSortLabel>{c.name}</Mui.TableSortLabel>
                          <Mui.ButtonBase data-resize>
                            <Icon.HorizontalRule />
                          </Mui.ButtonBase>
                        </Mui.TableCell>
                      )
                    }
                  </Mobx.Observer>
                ))}
              </Mui.TableRow>
            </Mui.TableHead>
            <Mui.TableBody>
              {table.items.map((item, i) => (
                <Mui.TableRow key={i}>
                  {table.columns.map((c) => (
                    <Mobx.Observer key={c.key}>
                      {() =>
                        c.hidden ? null : (
                          <Mui.TableCell>
                            {item[c.key] as React.ReactNode}
                          </Mui.TableCell>
                        )
                      }
                    </Mobx.Observer>
                  ))}
                </Mui.TableRow>
              ))}
            </Mui.TableBody>
          </Mui.Table>
        </Mui.TableContainer>
        {/* ---------------- bottom ---------------- */}
        <Mui.Paper data-section="bottom" square>
          <Mui.Button startIcon={<Icon.FileUpload />}>Экспорт</Mui.Button>
          <Mui.Button startIcon={<Icon.FileDownload />}>Импорт</Mui.Button>
          <Mui.TablePagination
            component="div"
            page={0}
            count={100}
            rowsPerPage={10}
            rowsPerPageOptions={[10, 20, 30]}
            onPageChange={() => null}
          />
        </Mui.Paper>
      </Mui.Container>
      {/* </TableContext.Provider> */}
    </Mui.ThemeProvider>
  )
})
