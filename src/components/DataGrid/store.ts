import { makeAutoObservable } from 'mobx'

import { IFilterItem, IGridCol, IGridStore, DataItemType } from './types'

const createFilterItem = (): IFilterItem => ({ name: '', condition: '', type: '', value: '' })

const mockData = Array(1000).fill({
  test: 0,
  test1: 1,
  test2: 2,
  test3: 3,
  test4: 4,
  test5: 5,
})

export class GridStore implements IGridStore {
  columns
  showCheckbox = false
  filters = [createFilterItem()]
  isActionToolbar = false
  search = ''
  data = mockData
  selected: DataItemType[] = []

  constructor({ columns, showCheckbox }: { columns: IGridCol[]; showCheckbox: boolean }) {
    makeAutoObservable(this)
    this.columns = columns
    this.showCheckbox = showCheckbox
  }

  changeSearch(search = '') {
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

  changeSelectedAll(checked: boolean) {
    this.data.forEach((d) => (d.checked = checked))
  }

  changeSelectedRow(index: number, checked: boolean) {
    const row = this.data[index]
    row.checked = checked
  }

  get renderFilter() {
    return this.filters
      .filter((f) => [f.name, f.condition, f.value].every(Boolean))
      .map(({ name, value }) => `${name} = ${value}`)
  }

  get renderColumns() {
    return this.columns.filter((c) => !c.hidden)
  }

  get selectedIds() {
    return this.data.filter((d) => d.checked).map((_, i) => i)
  }

  get checkAll() {
    const checked = Boolean(this.selectedIds.length)
    const indeterminate = checked && this.selectedIds.length !== this.data.length
    return { checked, indeterminate }
  }
}
