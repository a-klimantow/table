import { useLocalObservable } from 'mobx-react-lite'
import { TextFieldProps } from '@material-ui/core'

type StateType = {
  email: TextFieldProps
  password: TextFieldProps
  data: {
    email: string
    password: string
  } | null
}

export function useLoginPage() {
  const state = useLocalObservable(
    (): StateType => ({
      email: {
        value: '',
      },

      password: {
        value: '',
        type: 'password',
      },

      get data() {
        return { email: '', password: '' }
      },
    })
  )

  return state
}
