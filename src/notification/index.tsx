import * as React from 'react'
import { createPortal } from 'react-dom'
import { observable } from 'mobx'

import { INotification as N } from './types'
import { Context } from './context'
import { List } from './atoms'

const array = observable.array<N>([])

export const NotificationProvider: React.FC = ({ children }) => (
  <Context.Provider value={{ array }}>
    {children}
    {createPortal(<List />, document.body)}
  </Context.Provider>
)
