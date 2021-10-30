import { useTable } from './hooks/useTable'

export type TableType = ReturnType<typeof useTable>

interface IColOptional {
  hidden?: boolean
}

export interface ICol extends IColOptional {
  name: string
  key: string
}

export interface IData {
  [key: string]: unknown
}
