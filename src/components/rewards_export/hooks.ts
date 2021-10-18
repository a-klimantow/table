import * as React from 'react'
import { observable } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import sup, { ResponseError } from 'superagent'

import { currentUrl } from 'utils'
import { useFetchLists, useToken, useSnackbar, useFetchErrors } from 'hooks'

export { useFetchLists }

export const useExport = () =>
  useLocalObservable(() => ({
    // drawer

    isOpen: false,

    toggleOpen() {
      if (this.loading) return

      this.isOpen = !this.isOpen
    },

    // payments

    pay: '',

    setPay(str = '') {
      this.pay = str
      if (/kassa/i.test(str)) {
        this.disabledPanels = true
        this.panelIds.add(1029695)
        this.panelIds.add(7110218)
      } else {
        this.disabledPanels = false
        this.panelIds.clear()
      }
    },

    // statuses

    status: '',

    setStatus(str = '') {
      this.status = str
    },

    // panel ids

    panelIds: observable.set([] as number[]),

    setId(id: number) {
      this.panelIds.has(id) ? this.panelIds.delete(id) : this.panelIds.add(id)
    },

    disabledPanels: true,

    // post export

    loading: false,

    exportStart() {
      this.loading = true
    },

    exportEnd() {
      this.loading = false
    },

    get url() {
      return /kassa/i.test(this.pay) ? 'exportyookassa' : 'exportwebmoney'
    },

    get data() {
      return /kassa/i.test(this.pay) ? {} : { PalelIds: this.panelIds }
    },

    get query() {
      return { satus: this.status }
    },
  }))

export const useFetchExport = (exp: ReturnType<typeof useExport>) => {
  const token = useToken()
  const msg = useSnackbar()
  const handler = useFetchErrors()

  const post = sup
    .post(currentUrl(`withdrawal/${exp.url}`))
    .auth(token.access, { type: 'bearer' })
    .query(exp.query)
    .send(exp.data)
    .on('error', handler)
    .on('error', (err) => {
      const { response } = err as ResponseError
      if (response && !response.unauthorized) {
        const { errors } = response.body
        msg(errors.description, 'error')
      }
    })

  React.useEffect(() => {
    if (exp.loading)
      (async () => {
        try {
          const { body } = await post.then()
          console.log(body)
        } catch (error) {
        } finally {
          exp.exportEnd()
        }
      })()
  }, [exp, exp.loading, post])
}
