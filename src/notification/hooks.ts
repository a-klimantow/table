import * as React from 'react'
import * as Mui from '@mui/material'
import * as uuid from 'uuid'

import { useNtfContext } from './context'
import { INotification as N, NtfArrayType as Arr } from './types'

type P = Pick<N, 'message' | 'severity' | 'delay'>

// ===================

const createNtf = (message = '', severity: N['severity'], delay?: number) => ({
  message,
  severity,
  delay,
  key: uuid.v1(),
})

export const useNotifications = () => {
  const { array } = useNtfContext()
  return {
    error: (msg = '') => array.push(createNtf(msg, 'error', 10000)),

    info: (msg = '') => array.push(createNtf(msg, 'info')),

    success: (msg = '') => array.push(createNtf(msg, 'success')),

    warning: (msg = '') => array.push(createNtf(msg, 'warning')),

    create: (param: P) => array.push({ ...param, key: uuid.v1() }),
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
