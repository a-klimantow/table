import { ResponseError } from 'superagent'

interface IResponseError<T> extends ResponseError {
  body: T
}

export type LoginResposeError = IResponseError<{
  errors: {
    code: '404' | '400'
    type: 'Error'
    description: string
    notes: string
  }
}>

export interface IErrors {
  code: '404' | '400'
  type: 'Error' | 'Warning' | 'Notification'
  description: string
  message: string
}
