import * as R from 'react'

import { useMenu } from './hooks'

const MenuContext = R.createContext({} as ReturnType<typeof useMenu>)

export const useMenuContext = () => R.useContext(MenuContext)

export const MenuContextProvider = MenuContext.Provider
