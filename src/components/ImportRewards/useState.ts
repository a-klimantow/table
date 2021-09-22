import { useRef } from 'react'
import { action } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import { PopoverProps, ButtonProps, InputProps } from '@material-ui/core'

import { useCreateFile } from 'hooks'

type PayType = 'ЮKassa' | 'WebMoney'

const initialState = {
  open: false,
  data: null as FormData | null,
  items: ['ЮKassa', 'WebMoney'] as PayType[],
  pay: null as PayType | null,
}

export function useState() {
  const ref = useRef(null)
  const state = useLocalObservable(() => initialState)
  const { file, handleSetFrom } = useCreateFile()

  return {
    file,
    activePay: state.pay,
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
      onChange: handleSetFrom,
      type: 'file',
      sx: { display: 'none' },
    })) as InputProps[],
  }
}

export type StateType = ReturnType<typeof useState>
