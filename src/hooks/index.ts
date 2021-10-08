import { useAppStore } from 'stores/app'

export { useAppStore }
export const useUser = () => useAppStore().user

export { useSnackbar } from 'snackbar/useSnackbar'

export { useUrl } from './useUrl'
export { useMenu } from './useMenu'
export { useGetList } from './useGetList'
