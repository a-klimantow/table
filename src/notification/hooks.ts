import * as React from 'react'
import * as Mui from '@mui/material'
import * as uuid from 'uuid'

import { useNtfContext } from './context'
import { INotification as N, NtfArrayType as Arr } from './types'

const createNtf = (message = '', severity: N['severity'], delay?: number) => ({
  message,
  severity,
  delay,
  key: uuid.v1(),
})

type P = Parameters<typeof createNtf>

export const useNotifications = () => {
  const { array } = useNtfContext()

  const create = (...params: P) => array.push(createNtf(...params))

  return {
    create,
    error: (msg = '') => create(msg, 'error', 10000),
    info: (msg = '') => create(msg, 'info'),
    success: (msg = '') => create(msg, 'success'),
    warning: (msg = '') => create(msg, 'warning'),
  }
}

// ========================

const autoRemove = (item: N, array: Arr) => {
  const timer = setTimeout(() => {
    array.remove(item)
  }, item.delay ?? 5000)

  return () => clearTimeout(timer)
}

export const useItem = (item: N) => {
  const { array } = useNtfContext()

  React.useEffect(() => autoRemove(item, array), [item, array])

  return {
    variant: 'filled',
    severity: item.severity,
    children: item.message,
    onClose: () => array.remove(item),
  } as Mui.AlertProps
}
