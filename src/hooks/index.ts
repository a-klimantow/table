import { useAppContext } from 'app/context'

export { useAppContext }
export const useUser = () => useAppContext().user
export const useRouter = () => useAppContext().router
export const useToken = () => useAppContext().token

export { useSnackbar } from 'snackbar/useSnackbar'

export * from './useUrl'
export * from './useGetList'
export * from './useMenu'
export * from './useField'
export * from './useSuperagent'

export * from './useFetchErrors'
export * from './useFetchRewards'

export * from './useFetchLists'

export * from './useFetchLogin'
