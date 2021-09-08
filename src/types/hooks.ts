import { useHistory } from 'react-router-dom'
import { useAppContext } from '../App/context'

export type History = ReturnType<typeof useHistory>
export type AppStore = ReturnType<typeof useAppContext>
