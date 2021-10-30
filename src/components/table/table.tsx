import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'
import * as RDom from 'react-dom'

import { TableType as T } from './types'
import { useTableTheme } from './theme'

import { MenuColumns } from './menu_columns'
import { Search } from './search'
import { useColResize } from './hooks/useColResize'
import { useTableScroll } from './hooks/useTableScroll'
import { useSorting } from './hooks/useSorting'

export { useTable } from './hooks/useTable'

export const Table = React.memo<{ table: T }>(({ table, ...props }) => {
  const resize = useColResize(table)
  const scroll = useTableScroll()
  const sorting = useSorting(table)

  return (
    <Mui.ThemeProvider theme={useTableTheme()}>
      <React.Fragment>
        {RDom.createPortal(
          <Mobx.Observer>
            {() => (
              <Mui.Backdrop
                open={resize.start}
                onMouseMove={resize.move}
                onMouseUp={resize.up}
              />
            )}
          </Mobx.Observer>,
          document.body
        )}
        <Mui.Container disableGutters {...props}>
          <Mui.Paper data-section="toolbar" square>
            <MenuColumns table={table} />
            <Search table={table} />
          </Mui.Paper>

          <Mui.TableContainer onScroll={scroll}>
            <Mui.Table>
              <Mui.TableHead>
                <Mui.TableRow>
                  {table.columns.map((col) => (
                    <Mobx.Observer key={col.key}>
                      {() =>
                        col.hidden ? null : (
                          <Mui.TableCell align="right" data-key={col.key}>
                            <Mui.TableSortLabel
                              direction={col.sort}
                              active={!!col.sort}
                              onClick={() => sorting(col)}
                            >
                              <Mui.Typography
                                variant="body2"
                                fontWeight={col.quickFilter ? 500 : 300}
                              >
                                {col.name}
                              </Mui.Typography>
                            </Mui.TableSortLabel>
                            <Mui.ButtonBase
                              component="div"
                              data-resize
                              onMouseDown={resize.down}
                            >
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
                    {table.columns.map((col) => (
                      <Mobx.Observer key={col.key}>
                        {() =>
                          col.hidden ? null : (
                            <Mui.TableCell>
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
        </Mui.Container>
        {/* </TableContext.Provider> */}
      </React.Fragment>
    </Mui.ThemeProvider>
  )
})
