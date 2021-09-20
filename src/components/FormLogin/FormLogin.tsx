import { useMemo } from 'react'
import { Observer, observer } from 'mobx-react-lite'
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  LinearProgress,
} from '@material-ui/core'

import { Icon } from 'components'
import { useFromLogin } from './useFormLogin'
import { useFetch } from './useFetch'

export const FormLogin = observer(() => {
  const form = useFromLogin()
  useFetch(form)

  const toggleButton = useMemo(
    () => (
      <InputAdornment position="end">
        <IconButton onClick={() => form.togglePassType()}>
          <Icon type={form.hiddenPass ? 'eye_off' : 'eye_on'} />
        </IconButton>
      </InputAdornment>
    ),
    [form]
  )

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Observer>{() => <TextField {...form.email} />}</Observer>
      <Observer>
        {() => (
          <TextField
            {...form.pass}
            InputProps={{ endAdornment: toggleButton }}
          />
        )}
      </Observer>
      <Observer>
        {() => (
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={form.disabled}
            onClick={() => form.submit()}
          >
            Войти
          </Button>
        )}
      </Observer>
      <Observer>{() => (form.loading ? <LinearProgress /> : null)}</Observer>
    </form>
  )
})
