import { observer } from 'mobx-react-lite'

import { ICol } from 'types'
import { Head, HeadItem } from './atoms'

export interface TableHeadProps {
  items: ICol[]
}

export const TableHead = observer<TableHeadProps>(({ items }) => (
  <Head>
    {items.map((item) => (
      <HeadItem key={item.key} item={item} />
    ))}
  </Head>
))
