import { observable } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import { useRouteMatch } from 'react-router-dom'

import { IListItem as L } from 'types'
import { useFetchExportLists, useFetchExportFile } from 'hooks'

export { useFetchExportLists, useFetchExportFile }

type S = ReturnType<typeof useStateExport>
type D = null | { PanelIds: number[] }

const pays = observable.array<L>()
const statuses = observable.array<L>()
const panels = observable.array<L>()

export const useStateExport = () =>
  useLocalObservable(() => ({
    pays,
    statuses,
    panels,

    open: false,

    toggleOpen() {
      if (this.loading) return
      this.open = !this.open
    },

    setter(...data: Array<L[]>) {
      const [p, s, pn] = data
      pays.replace(p)
      statuses.replace(s)
      panels.replace(pn)
    },

    get start() {
      return [this.open, !pays.length, !statuses.length, !panels.length].every(
        Boolean
      )
    },

    get activePay() {
      const pay = pays.find((i) => i.active)
      return pay ? pay.name : ''
    },

    get url() {
      return this.activePay.replace(/ю/i, 'yoo').toLowerCase()
    },

    get isKassa() {
      return /kassa/gi.test(this.activePay)
    },

    get activeStatus() {
      const stat = statuses.find((i) => i.active)
      return stat ? stat.name : ''
    },

    setPay(id: number) {
      pays.forEach((i) => (i.active = i.id === id))
    },

    setStatus(id: number) {
      statuses.forEach((i) => (i.active = i.id === id))
    },

    panelIds: new Set<number>(),

    setPanelId(id: number) {
      this.panelIds.has(id) ? this.panelIds.delete(id) : this.panelIds.add(id)
    },

    get disabled() {
      return this.loading || [!this.isKassa, !this.panelIds.size].every(Boolean)
    },

    loading: false,

    exportStart() {
      if (this.disabled) return
      this.loading = true
    },

    finish() {
      this.loading = false
    },
  }))

export const useUrl = (state: S) =>
  Boolean(useRouteMatch('/:m/reports'))
    ? 'withdrawal-report/export'
    : `withdrawal/export${state.url}`
