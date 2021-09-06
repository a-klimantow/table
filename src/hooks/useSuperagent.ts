import superagent from 'superagent'

type MethodType = 'GET' | 'POST'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://10.10.4.72:30101/v1/admin/'
    : '/api/v1/admin/'

console.log(process.env.NODE_ENV, baseUrl)

export const useSuperagent = (url = '', method?: MethodType) => {
  return superagent(method ?? 'GET', `${baseUrl}${url}`)
}
