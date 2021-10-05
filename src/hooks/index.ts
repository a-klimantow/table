import { useAppStore } from 'stores'
export { useSnackbar } from 'snackbar/useSnackbar'

export const useUser = () => useAppStore().user
export const useRoutes = () => useAppStore().routes

export { useUrl } from './useUrl'
export { useMenu } from './useMenu'
export { useGetList } from './useGetList'
