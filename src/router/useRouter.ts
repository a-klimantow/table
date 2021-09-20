import { useMemo } from 'react'

import { createRouter } from 'app'
import { useAppStore } from 'hooks'

export function useRouter() {
  const { user } = useAppStore()

  const router = useMemo(() => createRouter(user.roles), [user.roles])

  const defaultUrl = useMemo(() => {
    const [{ module, pages }] = router
    const [{ page }] = pages
    return `/${module}/${page}/`
  }, [router])

  const modulesPath = useMemo(() => router.map((m) => m.path), [router])

  return { router, defaultUrl, modulesPath }
}
