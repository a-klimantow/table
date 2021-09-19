import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { ICol } from 'types'
import { Provider, Head, Body } from './atoms'

export interface TableProps {
  columns?: ICol[]
  data?: { [key: string]: ReactNode }[]
  loading?: boolean
}

export const Table = observer<TableProps>((props) => {
  return (
    <Provider loading={props.loading}>
      <Head columns={props.columns} />
      <Body columns={props.columns} data={props.data} />
    </Provider>
  )
})
