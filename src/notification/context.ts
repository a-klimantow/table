import * as React from 'react'

import { NtfArrayType as Arr } from './types'

export const Context = React.createContext({} as { array: Arr })

export const useNtfContext = () => React.useContext(Context)
