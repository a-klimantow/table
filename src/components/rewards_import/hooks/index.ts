import * as React from 'react'
import { useRouteMatch } from 'react-router'
//
import { currentUrl } from 'utils'
import { PageType as P } from 'types'
import { useContentFileFetch, useImportPost } from 'hooks'

export const useMenu = () => React.useState<null | Element>(null)
export const useFromData = () => React.useState<null | FormData>(null)
export const useActivePay = () => React.useState('')

export const useRewardsImportUrl = (pay: string): string => {
  const page = useRouteMatch<{ page: P }>('/:m/:page')?.params.page
  switch (page) {
    case 'requests':
      return currentUrl(`withdrawal/import${pay}`)
    case 'accruals':
      return currentUrl('withdrawal-arbitrary/import')
    default:
      return ''
  }
}

type D = ReturnType<typeof useFromData>
type A = ReturnType<typeof useActivePay>

export const useFetch = ([data, setData]: D, [pay, setPay]: A) => {
  const file = useContentFileFetch()
  const importPost = useImportPost()

  const url = useRewardsImportUrl(pay)

  React.useEffect(() => {
    if (data)
      (async () => {
        try {
          const res = await file.create(data)
          if (res) {
            console.log(res.id)
            await importPost(url, res.id)
            setData(null)
            setPay('')
          }
        } catch (error) {}
      })()
  })
}
