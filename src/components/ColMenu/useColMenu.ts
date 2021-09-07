import { useRef } from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { action } from 'mobx'

import { ColMenuProps } from './ColMenu'

const state = {
  isOpen: false,
  toggle(type: 'open' | 'close') {
    this.isOpen = type === 'open'
  },
}

export function useColMenu({ menu: { items } }: ColMenuProps) {
  const ref = useRef(null)
  const menu = useLocalObservable(() => state)

  const hiddenOne = (i: number) =>
    action('hidden_one', () => (items[i].hidden = !items[i].hidden))

  const hiddenAll = (b: boolean) =>
    action('hidden_all', () => items.forEach((c) => (c.hidden = b)))

  return {
    items,
    ref,
    anchorEl: ref.current,
    isOpenMenu: menu.isOpen,
    menuOpen: () => menu.toggle('open'),
    menuClose: () => menu.toggle('close'),
    hiddenOne,
    onHiddenAll: hiddenAll(true),
    onShowAll: hiddenAll(false),
  }
}
