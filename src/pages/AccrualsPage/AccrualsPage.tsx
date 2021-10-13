import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import { PageLayout } from 'components'
import { PageStore } from './store'
import { useFetch } from './useFetch'

export const AccrualsPage = observer(() => {
  const page = useRef(new PageStore()).current
  useFetch(page)
  return <PageLayout>ts</PageLayout>
})
