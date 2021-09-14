import { MouseEvent, useRef } from 'react'
import { makeAutoObservable } from 'mobx'
import { MenuProps, MenuItemProps, ButtonProps } from '@material-ui/core'

import { MenuAppProps } from './MenuApp'

const homeMenu = [
  ['projects', 'Проекты'],
  ['panels', 'Панели'],
  ['rewards', 'Вознаграждения'],
  ['administration', 'Администрирование'],
] as const

const userMenu = [
  // ['settings', 'Настройки'],
  ['logout', 'Выход'],
] as const

type MenuItems = typeof homeMenu | typeof userMenu

interface StoreProps {
  items: MenuItems
  name: string
}

class Store {
  button = {} as ButtonProps
  menu = { open: false } as MenuProps
  items = [] as MenuItemProps[]
  isUser: boolean

  constructor({ items, name }: StoreProps) {
    makeAutoObservable(this)

    this.isUser = Boolean(name)

    this.button.onClick = this.toggleMenu(true)
    this.button.children = this.isUser ? name : 'Меню'

    this.menu.onClick = this.toggleMenu()

    items.forEach((item) => {
      const [key, children] = item
      this.items.push({ key, children })
    })
  }

  private toggleMenu = (open?: boolean) => (e: MouseEvent) => {
    this.menu.anchorEl = open ? e.currentTarget : null
    this.menu.open = Boolean(open)

    const { tagName, textContent } = e.target as HTMLElement

    if ([!open, !this.isUser, /li/i.test(tagName)].every(Boolean)) {
      this.button.children = textContent
    }
  }
}

export function useMenu(props: MenuAppProps) {
  return useRef(
    new Store({
      name: props.type !== 'home' ? 'User' : '',
      items: props.type === 'home' ? homeMenu : userMenu,
    })
  ).current
}
