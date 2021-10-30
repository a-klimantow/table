import { useTable } from './hooks'

export type TableType = ReturnType<typeof useTable>

export interface ICol {
  name: string
  key: string
}

export interface IData {
  [key: string]: unknown
}
