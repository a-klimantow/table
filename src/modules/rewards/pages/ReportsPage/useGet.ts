import { useEffect } from 'react'
import superagent from 'superagent'

import { useAppContext } from 'hooks'

export function useGet(url: string, success: Function, fail: Function) {
  const app = useAppContext()
  useEffect(() => {
    const GET = superagent.get(url).set(app.authHeader)
    ;(async () => {
      try {
        const respose = await GET.then()
        success(respose.body)
      } catch (error) {
        fail(error)
      }
    })()

    return () => GET.abort()
  }, [url, success, fail, app])
}
