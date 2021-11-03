import * as React from 'react'
import * as Mui from '@mui/material'
import { useTable, useStorage } from './table/hooks'

export type TableType = ReturnType<typeof useTable>
export type StorageType = ReturnType<typeof useStorage>

type KC = keyof Mui.Components

export type ThemeHookType<K extends string = string> = () => K extends KC
  ? Mui.Components[K]
  : Mui.Components

type TSL = Mui.TableSortLabelProps

interface Optional {
  hidden: boolean
  sort: TSL['direction']
  sortOrder?: number
  sortable?: boolean
  width: number
  quickFilter: boolean
  formated?(v: unknown): React.ReactNode
}

export interface ICol extends Partial<Optional> {
  name: string
  key: string
  type: 'string' | 'number' | 'date'
}

export interface IData {
  [key: string]: unknown | IData
}

export interface TableProps {
  table: TableType
  onExportClick?(): void
  onImportClick?(): void
  isPage?: boolean
}
