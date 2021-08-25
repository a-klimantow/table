import React from 'react'
import { makeAutoObservable } from 'mobx'

class Export {
  isOpen = false

  constructor() {
    makeAutoObservable(this)
  }

  openModal() {
    this.isOpen = true
  }

  closeModal() {
    this.isOpen = false
  }
}

export const useExport = () => {
  const [store] = React.useState(() => new Export())

  return store
}
