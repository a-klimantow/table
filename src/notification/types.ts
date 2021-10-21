import { AlertProps } from '@mui/material'
import { IObservableArray } from 'mobx'

type Default = Pick<AlertProps, 'severity' | 'onClose'>

export interface INotification extends Default {
  message: string
  delay?: number
  key: string
}

export type NtfArrayType = IObservableArray<INotification>
