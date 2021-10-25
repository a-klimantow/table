import * as React from 'react'
import { ResponseError as ResErr } from 'superagent'
import { useHistory } from 'react-router-dom'

import { IFile } from 'types'
import { useNotifications, useFetch, useFetchAuth } from 'hooks'

type D = object | null
type R = () => void

export function useFetchImport(url = '', data: D, reset: R) {
  const createFile = useFetch('1029695/content', 'post')
  const importFile = useFetch(url, 'post')
  const ntf = useNotifications()
  const history = useHistory()

  useFetchAuth(createFile)
  useFetchAuth(importFile)

  React.useEffect(() => {
    data &&
      (async () => {
        createFile.send(data)
        try {
          const { body: file } = (await createFile) as { body: IFile }

          reset()

          importFile.query({ fileId: file.id })

          await importFile
          ntf.success('Импорт завершен успешно')
          history.replace(history.location.pathname)
        } catch (err) {
          reset()
          const { response } = err as ResErr
          response && ntf.error(response.body.errors.message)
        }
      })()
  })
}
