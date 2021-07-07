import { useLocation } from 'react-router-dom'

export const useColWidths = (): { [key: string]: number } | null => {
  const { pathname } = useLocation()

  const obj = localStorage.getItem(`${pathname}_width`)

  return obj ? JSON.parse(obj) : null
}
