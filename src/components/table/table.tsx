import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T } from './types'
import { useTableTheme } from './theme'
import { TableContext } from './context'

import { MenuColumns } from './menu_columns'
import { Search } from './search'
import { CellHead } from './cell_head'
import { CellResize } from './cell_resize'

import { useTableScroll } from './hooks/useTableScroll'
import { useSorting } from './hooks/useSorting'

export { useTable } from './hooks/useTable'

export const Table = React.memo<{ table: T }>(({ table, ...props }) => {
  const scroll = useTableScroll()
  const changeSort = useSorting(table)

  return (
    <Mui.ThemeProvider theme={useTableTheme()}>
      <React.Fragment>
        <Mui.Container disableGutters {...props}>
          {/* ---------------- toolbar ---------------- */}
          <TableContext.Provider value={table}>
            <Mui.Paper data-section="toolbar" square>
              <MenuColumns />
              <Search />
            </Mui.Paper>
            <Mui.TableContainer onScroll={scroll}>
              <Mui.Table>
                {/* ---------------- table head ---------------- */}

                <Mui.TableHead>
                  <Mui.TableRow>
                    {table.columns.map((col) => (
                      <CellHead
                        key={col.key}
                        col={col}
                        onSortClick={() => changeSort(col)}
                        resize={<CellResize table={table} />}
                      />
                    ))}
                  </Mui.TableRow>
                </Mui.TableHead>
                {/* ---------------- table body ---------------- */}

                <Mui.TableBody>
                  {table.items.map((item, i) => (
                    <Mui.TableRow key={i}>
                      {table.columns.map((col) => (
                        <Mobx.Observer key={col.key}>
                          {() =>
                            col.hidden ? null : (
                              <Mui.TableCell>
                                {console.log(item[col.key])}
                                {item[col.key] as React.ReactNode}
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
          </TableContext.Provider>
        </Mui.Container>
        {/* </TableContext.Provider> */}
      </React.Fragment>
    </Mui.ThemeProvider>
  )
})
