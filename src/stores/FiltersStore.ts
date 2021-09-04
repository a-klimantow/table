import { makeObservable, action, computed, observe, observable } from 'mobx'

export class FiltersStore {
  test = 0
  constructor() {
    makeObservable(this, { test: observable })
    
  }

  get value() {
    return this.test
  }

  set value(test: number) {
    this.test = test
  }
}
