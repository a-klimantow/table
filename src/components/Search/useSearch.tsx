import { useRef } from 'react'
import { makeAutoObservable, action } from 'mobx'
import { InputProps, ButtonProps } from '@material-ui/core'

export class SearchStore {
  current: string
  constructor(private value = '') {
    this.current = value
    makeAutoObservable(this, {}, { proxy: false })
  }

  updateCurrent() {
    this.current = this.value
  }

  get input(): InputProps {
    return {
      value: this.value,
      onChange: action((e) => (this.value = e.target.value)),
    }
  }

  get button(): ButtonProps {
    return {
      onClick: action(() => (this.value = '')),
    }
  }

  get showButton(): boolean {
    return !!this.value.trim()
  }
}

export const useSearch = (value = '') => useRef(new SearchStore(value)).current

export type SearchType = SearchStore
