import { SyntheticEvent } from 'react'

type HandleType = () => (e: SyntheticEvent<HTMLDivElement>) => void

export const useHandleScroll: HandleType = () => ({ currentTarget }) => {
  const { x: parentX } = currentTarget.getBoundingClientRect()
  const { x: childX } = currentTarget.children[0].getBoundingClientRect()

  if (childX < parentX) {
    currentTarget.setAttribute('data-scroll', '')
  } else {
    currentTarget.removeAttribute('data-scroll')
  }
}
