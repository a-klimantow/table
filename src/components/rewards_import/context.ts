import * as React from 'react'

import { StoreType } from './store'

export const ImportContext = React.createContext({} as StoreType)

export const useImportContext = () => React.useContext(ImportContext)
