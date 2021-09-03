import React from 'react'
import superagent from 'superagent'

import { useUrl } from 'hooks/useUrl'
import { IBidItem } from 'modules/rewards/types'
import { BidsStore } from './store'

const createPanelName = (item: IBidItem) => `${item.panel_name} ${item.country}`

export const useBidsPage = () => {
  const [store] = React.useState(
    () =>
      new BidsStore(
        [
          {
            name: 'Наименование панели',
            key: 'panel_name',
            renderCell: createPanelName,
          },
          { name: 'Старше 3 дней', key: 'old_requests' },
          { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
          { name: 'Всего заявок', key: 'all_requests' },
          { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
          { name: 'В обработке', key: 'accept_requests' },
        ],
        ['panel_name']
      )
  )

  const url = useUrl('withdrawal')

  React.useEffect(() => {
    const GET = superagent
      .get(url)
      .query(store.flev1.query)
      .query(store.pagination.query)

    store.fetchStart()
    GET.then((res) => store.getSuccess(res.body)).catch((e) => {
      if (e.message !== 'Aborted') store.fail()
    })

    return () => GET.abort()
  }, [store, url, store.pagination.query, store.flev1.query])

  return store
}
