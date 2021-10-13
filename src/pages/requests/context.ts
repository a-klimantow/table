import * as React from 'react'

const PageContext = React.createContext({})

export const PageContextProvider = PageContext.Provider

export const usePageContext = () => React.useContext(PageContext)
