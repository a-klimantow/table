import * as React from 'react'

import { useExport } from './hooks'

type S = ReturnType<typeof useExport>

export const ExportContext = React.createContext({} as S)

export const useExportContext = () => React.useContext(ExportContext)
