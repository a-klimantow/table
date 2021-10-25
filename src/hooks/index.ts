import { useAppContext } from 'app/context'

export { useAppContext }
export const useUser = () => useAppContext().user
export const useRouter = () => useAppContext().router
export const useToken = () => useAppContext().token

export { useNotifications } from 'notification/hooks'

export * from './fetch'
