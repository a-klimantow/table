import * as React from 'react'
import * as Mui from '@material-ui/core'
import { Observer } from 'mobx-react-lite'

export interface ICol<T = unknown> extends Mui.TableCellProps {
  key: T extends unknown ? string : keyof T
  name?: string
  quickFilter?: boolean
  hidden?: boolean
  renderCell?(item: T): React.ReactNode
}

export const useTableHead = (columns: ICol[]) =>
  columns.map((col) => (
    <Observer key={col.key}>
      {() => (
        <Mui.TableCell
          data-quick-filter={col.quickFilter || null}
          data-hidden={col.hidden || null}
        >
          {col.name}
        </Mui.TableCell>
      )}
    </Observer>
  ))

export function useTableBody<T extends { [P in keyof T]: T[P] }>(
  data: T[],
  cols: ICol[]
) {
  return data.map((item, i) => (
    <Mui.TableRow key={i}>
      {cols.map((c) => (
        <Observer key={c.key as string}>
          {() => (
            <Mui.TableCell data-hidden={c.hidden || null}>
              {c.renderCell ? c.renderCell(item) : item[c.key as keyof T]}
            </Mui.TableCell>
          )}
        </Observer>
      ))}
    </Mui.TableRow>
  ))
}
