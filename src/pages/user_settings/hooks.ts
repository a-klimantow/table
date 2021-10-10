import { ModuleType as M } from 'types'
import { useAppStore } from 'hooks'
import { name } from 'assets'
import { useRouteMatch } from 'react-router'
import { useLocalObservable } from 'mobx-react-lite'

const items: M[] = ['panels', 'projects', 'rewards', 'administration']

export const useDefaultPages = () => {
  const app = useAppStore()
  const defPage = useRouteMatch<{ module: M }>('/:module')?.params.module ?? ''

  return useLocalObservable(() => ({
    email: app.user.email,

    items: items.map((i) => ({
      value: i,
      label: name(i),
      disabled: !app.modules.includes(i),
    })),

    defPage,

    newDefPage: defPage,

    changeDefPage(path: string) {
      this.defPage = path
    },

    get disabled() {
      return this.defPage === this.newDefPage
    },
  }))
}
