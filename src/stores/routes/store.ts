import { makeObservable, observable } from 'mobx'

import { getPage } from 'pages'
import { RoleType, ModuleType, PageType } from 'types'
import { getModulePages } from './modules'
import { getPrommited } from './permissions'

export class Routes {
  pages = [] as PageType[]
  modules = [] as ModuleType[]
  defPath = '/'

  constructor() {
    makeObservable(
      this,
      {
        pages: observable.struct,
        modules: observable.struct,
      },
      { proxy: false }
    )
  }

  update(roles: RoleType[]) {
    const { modules, pages, defPath } = getPrommited(roles)
    this.modules = modules
    this.pages = pages
    this.defPath = defPath
  }

  private createPage = (p: PageType) => ({ path: `/${p}/`, page: getPage(p) })

  private hasModule = (m: ModuleType) => this.modules.includes(m)

  private hasPage = (p: PageType) => this.pages.includes(p)

  private createModule = (name: ModuleType) => {
    if (!this.hasModule(name)) return null

    const pageNames = getModulePages(name).filter(this.hasPage)

    if (!pageNames.length) return null

    const pages = pageNames.map(this.createPage)

    return { path: `/${name}/`, pages } as const
  }

  get rewards() {
    return this.createModule('rewards')
  }

  get user() {
    return this.createModule('user')
  }

  get allModules() {
    return [this.rewards, this.user]
  }
}
