import { createContext, useContext } from 'react'

import { ColMenuStore } from './store'

export const ColMenuContext = createContext({} as ColMenuStore)
export const useColMenu = () => useContext(ColMenuContext)
