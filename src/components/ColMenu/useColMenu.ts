import { useRef, useMemo } from 'react'
import { action } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import { ButtonProps, PopoverProps, SwitchProps } from '@material-ui/core'

import { ICol } from 'types'

const initialState = {
  open: false,
  toggle(type: 'open' | 'close') {
    this.open = type === 'open'
  },
}

export function useColMenu() {
  const menu = useLocalObservable(() => initialState)
  const ref = useRef(null)
  return { menu, ref }
}
