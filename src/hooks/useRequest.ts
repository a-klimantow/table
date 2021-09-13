import { useEffect } from 'react'
import sa, { SuperAgent, SuperAgentRequest } from 'superagent'
import { autorun, reaction, toJS, when } from 'mobx'

import { useUrl } from 'hooks'

export interface Errors {
  errors: {
    code: '404' | '400'
    type: 'Error'
    description: string
    notes: string
  }
}

type Url = 'login'
type Method = 'get' | 'post'

type Hook = (
  url: Url,
  method: Method,
  config: {
    data?: object | null
    success: Function
    fail?(body: Errors): void
    query?: ''
  }
) => void

export const useRequest: Hook = (url, method = 'get', config) => {
  const currentUrl = useUrl(url)

  const POST = sa.post(currentUrl)

  useEffect(() => {
    const { success, fail, data } = config
    if (method === 'post' && config.data) {
      ;(async () => {
        try {
          const { body } = await POST.send(data ?? {}).then()
          success(body.data)
        } catch (error) {
          fail && fail(error.response.body)
        }
      })()
    }
    return () => POST.abort()
  }, [POST, method, config])
}

export class Request {
  url: string
  data: null | object = null
  abortAll = false

  constructor(url = '') {
    this.url = url
    autorun(() => {
      console.log(toJS(this.login))
    })

    when(() => this.abortAll).then(() => console.log(1, 'abort'))

    reaction(
      () => this.data,
      () => this.login.abort()
    )
  }

  abort() {
    this.abortAll = true
  }

  setData(data: Request['data']) {
    this.data = data
  }

  get login() {
    return sa.post(`/v1/admin/${this.url}`).send(this.data ?? {})
  }
}
