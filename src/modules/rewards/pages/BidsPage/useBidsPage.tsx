import React from 'react'
import superagent from 'superagent'

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

  React.useEffect(() => {
    const GET = superagent
    .get('http://10.10.4.72:30101/v1/admin/withdrawal')
    .query({ text: '' })
    .query({ top: store.top })
    .query({ skip: store.skip })
    
    store.fetchStart()
    GET.then((res) => store.getSuccess(res.body)).catch(() => store.fail())

    return () => GET.abort()
  }, [store, store.top, store.skip])

  return store
}
