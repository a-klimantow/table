import { RouteProps } from 'react-router-dom'
import { makeAutoObservable, reaction } from 'mobx'
import store from 'store'

// import { createRouter } from 'router/settings'
// import { UserType } from 'types'
// import { pages, PageType } from 'pages'

// export class User {
//   private user: UserType | null = store.get('user') ?? null
//   private url = store.get('defaultUrl') ?? ''

//   setUser(user: UserType) {
//     this.user = user
//   }

//   clearUser() {
//     this.user = null
//   }

//   get userRoles() {
//     return this.user?.roles ?? ['Unknown']
//   }

//   get token(): string {
//     return this.user?.token ?? ''
//   }

//   get router() {
//     return createRouter(this.userRoles)
//   }

//   get pages(): RouteProps[] {
//     return this.router.pages.map((page) => createRoutePage(page))
//   }

//   get modules(): { path: string; pages: RouteProps[] }[] {
//     return this.router.modules.map((m) => ({
//       path: `/${m.path}/`,
//       pages: m.pages.map((page) => createRoutePage(page, m.path)),
//     }))
//   }

//   get defaultUrl() {
//     if (this.url) return this.url
//     const { modules, pages } = this.router
//     if (!modules.length) return `/${pages[0]}/`
//     return `/${modules[0].path}/`
//   }

//   constructor() {
//     makeAutoObservable(this)
//     reaction(
//       () => this.user,
//       (user) => store.set('user', user)
//     )
//   }
// }

// function createRoutePage(page?: PageType, modulePath = ''): RouteProps {
//   return {
//     path: `${modulePath && `/${modulePath}`}/${page}/`,
//     component: page && pages[page],
//   }
// }
