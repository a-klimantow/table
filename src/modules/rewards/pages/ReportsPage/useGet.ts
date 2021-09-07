import { useEffect } from 'react'
import superagent from 'superagent'

export function useGet(url: string, success: Function, fail: Function) {
  useEffect(() => {
    const GET = superagent.get(url)
    ;(async () => {
      try {
        const respose = await GET.then()
        success(respose.body)
      } catch (error) {
        fail(error)
      }
    })()

    return () => GET.abort()
  }, [url, success, fail])
}
