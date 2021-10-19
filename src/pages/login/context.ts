import * as React from 'react'
//
import { StoreType } from './store'

export const LoginContext = React.createContext({} as StoreType)

export const useLoginContext = () => React.useContext(LoginContext)
