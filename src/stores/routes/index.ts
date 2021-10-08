import { store } from '../app/store'

export type RoutesType = ReturnType<typeof useRoutes>

export function useRoutes() {
  console.log(store)
}
