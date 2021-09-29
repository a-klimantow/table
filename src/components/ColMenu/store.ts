import { makeAutoObservable } from 'mobx'
import { ICol } from 'types'

class MenuStore {
  anchor = null as Element | null

  open = (anchor: Element) => (this.anchor = anchor)

  close = () => (this.anchor = null)

  get isOpen() {
    return Boolean(this.anchor)
  }

  constructor() {
    makeAutoObservable(this, {}, { proxy: false })
  }
}

export class ColMenuStore {
  constructor(public columns: ICol[], public menu = new MenuStore()) {
    makeAutoObservable(this, {}, { proxy: false })
  }

  changeHidden = (item: ICol) => (item.hidden = !item.hidden)
  hiddenAll = () => this.columns.forEach((col) => (col.hidden = true))
  showAll = () => this.columns.forEach((col) => (col.hidden = false))
}
