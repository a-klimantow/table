import { makeAutoObservable } from 'mobx'

import { IFilterItem, IGridCol, IGridStore } from './types'

const createFilterItem = (): IFilterItem => ({ name: '', condition: '', type: '', value: '' })

export class GridStore implements IGridStore {
  columns
  filters = [createFilterItem()]
  isActionToolbar = false
  search = ''

  constructor(columns: IGridCol[]) {
    makeAutoObservable(this)
    this.columns = columns
  }

  changeSearch = (search = '') => {
    this.search = search
  }

  hiddenAllCols() {
    this.columns.forEach((c) => (c.hidden = true))
  }

  showAllCols() {
    this.columns.forEach((c) => (c.hidden = false))
  }

  toggleColHidden(name: string) {
    const col = this.columns.find((c) => c.name === name)
    col && (col.hidden = !col.hidden)
  }

  addFilter() {
    this.filters.push(createFilterItem())
  }

  deleteFilter(index: number) {
    if (this.filters.length > 1) {
      this.filters = [...this.filters.slice(0, index), ...this.filters.slice(index + 1)]
    } else {
      this.filters = [createFilterItem()]
    }
  }

  changeFilter(index: number, field: keyof IFilterItem, value = '') {
    const filter = this.filters[index]
    switch (field) {
      case 'name':
        filter.name = value
        break
      case 'condition':
        filter.condition = value
        break
      case 'value':
        filter.value = value
        break
      default:
        break
    }
  }

  get renderFilter() {
    return this.filters
      .filter((f) => [f.name, f.condition, f.value].every(Boolean))
      .map(({ name, value }) => `${name} = ${value}`)
  }
}
