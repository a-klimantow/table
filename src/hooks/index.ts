import { useAppStore } from 'stores/app'
export { useSnackbar } from 'snackbar/useSnackbar'

export const useUser = () => useAppStore().user

export { useUrl } from './useUrl'
export { useMenu } from './useMenu'
export { useGetList } from './useGetList'
