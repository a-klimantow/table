import React from 'react'
import superagent from 'superagent'

import { useUrl } from 'hooks/useUrl'

import { IProfitItem } from 'modules/rewards/types'
import { BidsStore } from './store'

const formatDate = (i: IProfitItem) =>
  new Intl.DateTimeFormat('ru-Ru', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(i.created))

const formatCurrency = (i: IProfitItem) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(
    i.amount ?? 0
  )

export const useProfitPage = () => {
  const [store] = React.useState(
    () =>
      new BidsStore(
        [
          { name: 'Файл', key: 'file_name' },
          { name: 'ID пользователя', key: 'id' },
          {
            name: 'Дата и время загрузки',
            key: 'created',
            renderCell: formatDate,
          },
          { name: 'Сумма', key: 'amount', renderCell: formatCurrency },
        ],
        ['file_name', 'id']
      )
  )

  const url = useUrl('withdrawal-arbitrary')

  React.useEffect(() => {
    const GET = superagent
      .get(url)
      .query({ text: '' })
      .query({ top: store.top })
      .query({ skip: store.skip })

    store.fetchStart()
    GET.then((res) => store.getSuccess(res.body)).catch(() => store.fail())

    return () => GET.abort()
  }, [store, store.top, store.skip, url])

  return store
}
