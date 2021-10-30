import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'

import { TableType as T } from './types'
import { TableContext } from './context'
import { useTableTheme } from './theme'
export { useTable } from './hooks'

interface TableProps {
  table: T
}

const usePopover = () => React.useState<null | Element>(null)

export const Table = React.memo<TableProps>(({ table, ...props }) => {
  const [anchor, setAnchor] = usePopover()
  return (
    <Mui.ThemeProvider theme={useTableTheme()}>
      <TableContext.Provider value={table}>
        <Mui.Container disableGutters {...props}>
          {/* ---------------- toolbar ---------------- */}
          <Mui.Paper data-section="toolbar" square>
            {/* ---------------- menu columns ---------------- */}
            <Mui.IconButton onClick={(e) => setAnchor(e.currentTarget)}>
              <Icon.ViewColumn />
            </Mui.IconButton>
            <Mui.Popover
              open={!!anchor}
              anchorEl={anchor}
              onClose={() => setAnchor(null)}
            >
              <Mui.List>
                {table.columns.map((c) => (
                  <Mui.ListItem key={c.key}>
                    <Mui.ListItemIcon>
                      <Mui.Switch />
                    </Mui.ListItemIcon>
                    {c.name}
                  </Mui.ListItem>
                ))}
              </Mui.List>
              <Mui.Stack
                direction="row"
                justifyContent="space-between"
                justifySelf="stretch"
                mb={1}
                px={1}
              >
                <Mui.Button size="small">Скрыть все</Mui.Button>
                <Mui.Button size="small">Показать все</Mui.Button>
              </Mui.Stack>
            </Mui.Popover>
            {/* ---------------- search ---------------- */}
            <Mui.Paper square={false} data-section="search">
              <Icon.Search fontSize="small" />
              <Mui.InputBase placeholder="Поиск..." />
              <Mui.IconButton size="small">
                <Icon.Clear />
              </Mui.IconButton>
            </Mui.Paper>
          </Mui.Paper>
          {/* ---------------- table ---------------- */}
          <Mui.TableContainer>
            <Mui.Table>
              <Mui.TableHead>
                <Mui.TableRow>
                  {table.columns.map((c) => (
                    <Mui.TableCell key={c.key}>
                      <Mui.TableSortLabel>{c.name}</Mui.TableSortLabel>
                      <Mui.ButtonBase data-resize>
                        <Icon.HorizontalRule />
                      </Mui.ButtonBase>
                    </Mui.TableCell>
                  ))}
                </Mui.TableRow>
              </Mui.TableHead>
              <Mui.TableBody>
                {table.items.map((item, i) => (
                  <Mui.TableRow key={i}>
                    {table.columns.map((c) => (
                      <Mui.TableCell key={c.key}>
                        {item[c.key] as React.ReactNode}
                      </Mui.TableCell>
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
      </TableContext.Provider>
    </Mui.ThemeProvider>
  )
})
