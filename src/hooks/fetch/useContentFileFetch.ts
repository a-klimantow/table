import sup from 'superagent'

import { useToken } from 'hooks'
import { currentUrl } from 'utils'

interface IFile {
  checksum: number
  file_name: string
  file_size: number
  id: number
  original_name: string
  parent_id: number
  parent_type: string
  updated: Date
  url: string
}

export function useContentFileFetch() {
  const token = useToken()

  return {
    async create(data: FormData) {
      const request = sup
        .post(currentUrl('1029695/content'))
        .auth(token.access, { type: 'bearer' })
        .send(data)

      try {
        const { body } = await request
        return body as IFile
      } catch (error) {}
    },
  }
}
