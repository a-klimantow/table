import { useRef } from 'react'
import { action } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import { PopoverProps, ButtonProps, InputProps } from '@material-ui/core'

import { useImport } from './useImport'

type PayType = 'ЮKassa' | 'WebMoney'

const initialState = {
  open: false,
  data: null as FormData | null,
  items: ['ЮKassa', 'WebMoney'] as PayType[],
  pay: null as PayType | null,

  setData(data: FormData, name = '') {
    this.data = data
    this.pay = name as PayType
  },

  get loading() {
    return Boolean(this.data)
  },
}

export type StateType = typeof initialState

export function useState() {
  const ref = useRef(null)
  const state = useLocalObservable(() => initialState)
  useImport(state)

  return {
    button: {
      ref,
      onClick: action(() => (state.open = true)),
    } as ButtonProps,

    popover: {
      open: state.open,
      onClose: action(() => (state.open = false)),
      anchorEl: ref.current,
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    } as PopoverProps,

    items: state.items.map((name) => ({
      name,
      onChange: action((e) => {
        const name = e.currentTarget.name
        const form = e.currentTarget.closest('form')
        if (form) {
          state.setData(new FormData(form), name)
        }
      }),
      type: 'file',
      sx: { display: 'none' },
    })) as InputProps[],
  }
}
