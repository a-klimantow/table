import { ChangeEvent, ReactNode } from 'react'

export interface IGridStore {
  columns: IGridCol[]
  isActionToolbar: boolean
  search: string
  filters: IFilterItem[]
  data: { [key: string]: ReactNode }[]
  // actions
  changeSearch: (s: string) => void
  hiddenAllCols: () => void
  showAllCols: () => void
  toggleColHidden: (name: string) => void
  addFilter: () => void
  deleteFilter: (n: number) => void
  changeFilter: (i: number, f: keyof IFilterItem, v: string) => void
  //getters
  renderFilter: string[]
  renderColumns: IGridCol[]
}

export interface IGridCol {
  name: string
  field: string
  hidden?: boolean
}

export interface IFilterItem {
  name: string
  type: string
  condition: string
  value: string
}

export interface IDataGridProps {
  columns: IGridCol[]
  data: { [key: string]: string | ReactNode }[]
}

export interface IDataGridState extends IDataGridProps {
  filters: IGridCol[]
  search: string
  selected: number[]
  hiddenFields: string[]
}

export interface IDataGridContext extends IDataGridState {
  memoColumns: IGridCol[]
}

export interface IDataGridActionContext {
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeHidden: (field: string) => (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeHiddenAll: (hidden: boolean) => () => void
}

export type ActionsType =
  | { type: 'search_change'; value: string }
  | { type: 'change_hidden'; field: string; hidden: boolean }
  | { type: 'change_hidden_all'; hidden: boolean }
