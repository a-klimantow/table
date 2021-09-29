import { createContext, useContext } from 'react'

import { ExportStore } from './store'

export const ExportContext = createContext({} as ExportStore)

export const useExportContext = () => useContext(ExportContext)
