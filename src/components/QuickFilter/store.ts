import { makeAutoObservable } from 'mobx'

export class QFilterStore {
  value
  touched = false

  constructor(value: string) {
    makeAutoObservable(this)
    this.value = value
  }

  change(value: string) {
    this.value = value
    this.touched = true
  }

  changeTouched() {
    this.touched
  }

  clear() {
    this.value = ''
    this.touched = true
  }

  get showClearButton() {
    return Boolean(this.value.trim())
  }
}
