import sup from 'superagent'

import { useUrl } from 'hooks'

export const useSuperagent = () => {
  return {
    login: sup.post(useUrl('login')),
  }
}
