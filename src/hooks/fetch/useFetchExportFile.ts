import * as React from 'react'
import { Response, ResponseError } from 'superagent'
import FS from 'file-saver'

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
  !state.isKassa && fetchExport.send({ panelIds: [...state.panelIds.values()] })

  React.useEffect(() => {
    ;(async () => {
      if (!state.loading) return
      try {
        const response = await fetchExport
        state.finish()
        saveFile(response)
          ? ntf.success('Файл экспотрирован успешно')
          : ntf.error('Что-то сломалось')
      } catch (error) {
        state.finish()
        const { response } = error as ResponseError
        if (response?.body) {
          const { code, description } = response.body.errors as IErrors
          if (code === '404') ntf.error(description)
        }
      }
    })()
  }, [state, state.loading, fetchExport, ntf])
}

function saveFile(response: Response) {
  const { header } = response

  const regExp = /(?<=="?)(.*)(?="?;)/

  const res = header['content-disposition'].match(regExp)

  if (res) {
    const [filename] = res

    const file = new File([response.text], filename.replace(/"/, ''))

    FS.saveAs(file, filename)

    return true
  } else return false
}
