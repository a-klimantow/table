import * as React from 'react'

import { useFromData, useFetch, useActivePay } from './hooks'
import { ImportMenu, Items } from './atoms'

export const RewardsImport = React.memo(() => {
  const formData = useFromData()
  const activePay = useActivePay()
  useFetch(formData, activePay)

  return (
    <ImportMenu>
      <Items formData={formData} activePay={activePay} />
    </ImportMenu>
  )
})
