import { observer } from 'mobx-react-lite'
import * as React from 'react'

import { MenuStateType as StateType, useMenuState } from './hooks'

const MenuContext = React.createContext({} as StateType)

export const useMenuContext = () => React.useContext(MenuContext)

export const MenuContextProvider = observer((props) => (
  <MenuContext.Provider {...props} value={useMenuState()} />
))
