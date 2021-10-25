import * as React from 'react'
import { ResponseError } from 'superagent'

import { IErrors } from 'types'
import { useFetch, useFetchAuth, useNotifications } from 'hooks'
import { useStateExport } from 'components/file_export/hooks'

type S = ReturnType<typeof useStateExport>

export function useFetchExportFile(url = '', query = '', state: S) {
  const ntf = useNotifications()
  const fetchExport = useFetch(url, 'post')
  useFetchAuth(fetchExport)

  fetchExport.query(query)
  fetchExport.query({ status: state.activeStatus })
  fetchExport.send({ panelIds: [...state.panelIds.values()] })

  React.useEffect(() => {
    ;(async () => {
      if (!state.loading) return

      try {
        const data = await fetchExport
        console.log(data.text)
        state.finish()
        ntf.success('Файл экспотрирован успешно')
      } catch (error) {
        state.finish()
        const { response } = error as ResponseError
        if (response?.body) {
          const { code, description, type } = response.body.errors as IErrors
          if (code === '404') ntf.error(description)
        }
      }
    })()
  })
}
