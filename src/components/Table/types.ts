import React from 'react'

export interface ICol {
  name: string
  key: string
  renderCell?(item: unknown): React.ReactNode
  hidden?: boolean
  quickFilter?: boolean
}

export interface TableProps {
  columns: ICol[]
  rows?: React.ReactNode[][]
  loading?: boolean
}
