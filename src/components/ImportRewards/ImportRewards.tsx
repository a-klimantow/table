import { useRef, useEffect } from 'react'
import { action, runInAction } from 'mobx'
import s from 'superagent'
import { useLocalObservable, Observer, observer } from 'mobx-react-lite'
import {
  Button,
  Popover,
  PopoverProps,
  ButtonProps,
  InputProps,
  Input,
} from '@material-ui/core'
import { useAppStore } from 'hooks'

const initialState = {
  isOpen: false,
  data: null as FormData | null,

  open() {
    this.isOpen = true
  },

  close() {
    this.isOpen = false
  },

  get popover(): PopoverProps {
    return {
      open: this.isOpen,
      onClose: () => this.close(),
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    }
  },

  get button(): ButtonProps {
    return { onClick: () => this.open() }
  },

  get uKassa(): InputProps {
    return {
      type: 'file',
      sx: { display: 'none' },
    }
  },

  get loading() {
    return Boolean(this.data)
  },
}

export const ImportRewards = observer(() => {
  const btn = useRef(null)
  const state = useLocalObservable(() => initialState)
  const { user } = useAppStore()

  // 1029695
  const createFile = s
    .post('/api/v1/admin/1029695/content')
    .auth(user.token, { type: 'bearer' })
    .send(state.data ?? {})

  const importUKassa = s
    .post('/api/v1/admin/withdrawal/importyookassa')
    .auth(user.token, { type: 'bearer' })

  useEffect(() => {
    console.log(state.loading)
    if (!state.loading) return
    ;(async () => {
      try {
        const res = await createFile.then()
        const { id: fileId } = res.body.data
        console.log(fileId)

        const result = await importUKassa.query({ fileId }).then()
        console.log('result', result.body)

        runInAction(() => {
          state.data = null
        })
      } catch (error) {}
    })()

    return () => createFile.abort()
  }, [state, createFile, importUKassa])

  return (
    <>
      <Observer>
        {() => (
          <Button {...state.button} ref={btn}>
            Импорт
          </Button>
        )}
      </Observer>
      <Observer>
        {() => (
          <Popover {...state.popover} anchorEl={btn.current}>
            <form>
              <Input
                type="file"
                name="test"
                onChange={action((e) => {
                  const form = e.currentTarget.closest(
                    'form'
                  ) as HTMLFormElement
                  state.data = new FormData(form)
                })}
              />
            </form>
          </Popover>
        )}
      </Observer>
    </>
  )
})
