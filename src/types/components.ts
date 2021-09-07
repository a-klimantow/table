import { ReactNode } from 'react'

type KeyType<I> = I extends string ? I : keyof I

type RenderCellType<I> = I extends string
  ? (props: unknown) => ReactNode
  : (props: I) => ReactNode

export interface ICol<I = string> {
  key: KeyType<I>
  name: string
  hidden?: boolean
  renderCell?: RenderCellType<I>
}
