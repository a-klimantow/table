import { useLocalObservable } from 'mobx-react-lite'

import { useNotifications } from 'hooks'
export type StoreType = ReturnType<typeof useStore>

type A = null | Element

export const useStore = () => {
  const ntf = useNotifications()
  return useLocalObservable(() => ({
    // menu
    anchor: null as A,

    setAnchor(a: A) {
      if (this.data) return

      this.anchor = a
    },

    // post
    data: undefined as undefined | FormData,

    url: '',

    setData(file: File, url: string) {
      this.data = new FormData()
      this.data.set(file.name, file)
      this.url = url
    },

    success() {
      this.data = undefined
      ntf.success('ok')
    },

    fail() {
      this.data = undefined
      ntf.error('ne ok')
    },
  }))
}
