import sup from 'superagent'

import { useToken } from 'hooks'

export function useImportPost() {
  const token = useToken()
  return (url: string, fileId: number) =>
    sup
      .post(url)
      .auth(token.access, { type: 'bearer' })
      .send({ fileId })
}
