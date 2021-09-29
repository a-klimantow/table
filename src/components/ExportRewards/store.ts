import { makeAutoObservable, observable } from 'mobx'

export class ExportStore {
  // drawer
  isOpen = false

  open = () => (this.isOpen = true)
  close = () => {
    if (this.isLoading) return
    this.isOpen = false
  }

  // system
  activeSystem = ''

  setActiveSytem = (system = '') => (this.activeSystem = system)

  // status
  activeStatus = ''

  setActiveStatus = (status = '') => (this.activeStatus = status)

  // panels
  panelIds = observable.array([] as number[])

  changePanelIds(id: number) {
    this.panelIds.includes(id)
      ? this.panelIds.remove(id)
      : this.panelIds.push(id)
  }

  get disablePanels() {
    return !this.isWebMoney
  }

  get disabledExpBtn() {
    return (this.isWebMoney && !this.panelIds.length) || this.isLoading
  }

  // fetch
  fetchStatus = 'wait' as 'loading' | 'wait'

  fetchStart = () => (this.fetchStatus = 'loading')
  fetchStop = () => (this.fetchStatus = 'wait')

  get isWebMoney() {
    return /money/gi.test(this.activeSystem)
  }

  get postData() {
    return this.isWebMoney ? { PanelId: this.panelIds } : {}
  }

  get query() {
    return { status: this.activeStatus }
  }

  get isLoading() {
    return this.fetchStatus === 'loading'
  }

  constructor() {
    makeAutoObservable(this, {}, { proxy: false })
  }
}
