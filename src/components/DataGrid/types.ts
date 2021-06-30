import { ChangeEvent, ReactNode } from 'react'

export interface IDataGridCol {
  name: string
  field: string
  hidden?: boolean
}

export interface IDataGridProps {
  columns: IDataGridCol[]
  data: { [key: string]: string | ReactNode }[]
}

export interface IDataGridState extends IDataGridProps {
  filters: IDataGridCol[]
  search: string
  selected: number[]
  hiddenFields: string[]
}

export interface IDataGridContext extends IDataGridState {
  memoColumns: IDataGridCol[]
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
