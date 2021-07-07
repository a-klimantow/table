import { useContext } from 'react'

import { GridContext } from '../context'

export const useGridStore = () => useContext(GridContext)
