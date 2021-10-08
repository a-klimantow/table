import { makeAutoObservable, reaction } from 'mobx'
import storage from 'store'

import { IUser, PageType, ModuleType } from 'types'
import { getPerms, getRoutes, names } from 'assets'

type R = IUser['roles']
type U = typeof initialUser
type T = typeof initialToken

const initialUser = { name: '', id: 0, email: '', roles: [] as R }
const initialToken = { access: '', refresh: '' }

export class AppStore {
  user = storage.get('user', initialUser) as U
  token = storage.get('token', initialToken) as T

  constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.user,
      (user) => storage.set('user', user)
    )

    reaction(
      () => this.token,
      (token) => storage.set('token', token)
    )
  }

  updateUser(user: U) {
    this.user = user
  }

  updateToken(token: T) {
    this.token = token
  }

  // все разрешенные модули для роли
  get modules() {
    return getPerms('modules', this.user.roles) as ModuleType[]
  }

  // все разрешенные страницы для роли
  get pages() {
    return getPerms('pages', this.user.roles) as PageType[]
  }

  // структура приложения отфильтрованная по modules и pages
  private get structure() {
    return getRoutes(this.modules, this.pages)
  }

  // корректные роуты для роли
  get routes() {
    // фильт по наличию страниц
    return this.structure.filter((r) => Boolean(r[1].length))
  }

  // редирект на дефолтную страницу
  get redirect() {
    if (this.routes[0]) {
      const [module] = this.routes[0]
      return `/${module}/`
    }
    return '/login/'
  }

  // меню в хедере
  get moduleMenu() {
    return this.structure.map(([module, pages]) => ({
      path: `/${module}/`,
      name: names.get(module),
      disabled: !pages.length,
    }))
  }

  // меню в хедере
  get userMenu() {
    const items = ['settings', 'logout'] as PageType[]
    return items.map((page) => ({ name: names.get(page), hash: page }))
  }
}
