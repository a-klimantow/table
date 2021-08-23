import React from 'react'

export interface ICol {
  name: string
  key: string
  renderCell?(item: unknown): React.ReactNode
  hidden?: boolean
  queryFilter?: boolean
}

export interface TableProps {
  columns: ICol[]
  rows?: React.ReactNode[][]
  loading?: boolean
}
