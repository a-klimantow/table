import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type HandleType = (
  dispatch: Dispatch<SetStateAction<{}[]>>
) => (e: ChangeEvent<HTMLInputElement>) => void

export const useHandleRowCheck: HandleType = (dispatch) => {
  return ({ target }) => {
    const { checked, name } = target
    if (name === 'all') {
      dispatch((r) => r.map((row) => ({ ...row, checked })))
    } else {
      const idx = Number(name)
      dispatch((r) => r.map((row, i) => (i === idx ? { ...row, checked } : row)))
    }
  }
}
