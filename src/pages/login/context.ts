import * as React from 'react'
//
import { useLogin } from './hooks'

const LoginContext = React.createContext({} as ReturnType<typeof useLogin>)

export const useLoginContext = () => React.useContext(LoginContext)

export const LoginContextProvider = LoginContext.Provider
