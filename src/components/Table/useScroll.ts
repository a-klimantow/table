import { SyntheticEvent } from 'react'

export const useScroll = () => (e: SyntheticEvent<HTMLDivElement>) => {
  const el = e.currentTarget
  const parent = el.getBoundingClientRect()
  const child = el.children[0].getBoundingClientRect()
  if (child.x < parent.x) {
    el.setAttribute('data-scroll', '')
  } else {
    el.removeAttribute('data-scroll')
  }
}
