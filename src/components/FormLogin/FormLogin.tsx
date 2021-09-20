import { useMemo, memo, FormEvent } from 'react'
import { Observer, observer } from 'mobx-react-lite'
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  LinearProgress,
  Box,
  BoxProps,
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
    <Form>
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
            {form.loading && (
              <LinearProgress
                sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
              />
            )}
          </Button>
        )}
      </Observer>
    </Form>
  )
})

const Form = memo<BoxProps>((props) => (
  <Box
    component="form"
    onSubmit={(e: FormEvent) => e.preventDefault()}
    {...props}
    sx={{
      display: 'grid',
      gridAutoRows: 80,
      alignItems: 'start',
    }}
  />
))
