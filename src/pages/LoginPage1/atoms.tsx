import { memo, ReactNode } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react-lite'
import { TextField, TextFieldProps, Box } from '@material-ui/core'

export const Page = memo<{ children: ReactNode }>(({ children }) => (
  <Box>{children}</Box>
))

export const Field = observer<{ field: TextFieldProps; password?: boolean }>(
  ({ field, password }) => {
    const change: TextFieldProps['onChange'] = action(
      'change_email',
      (e) => (field.value = e.target.value)
    )

    const isPass = field.type === 'password'

    const click = action('change_hidden', () => {
      isPass ? (field.type = 'text') : (field.type = 'password')
    })

    return (
      <TextField
        value={field.value}
        onChange={change}
        InputProps={
          password ? { endAdornment: <button onClick={click}>1</button> } : {}
        }
        type={field.type}
      />
    )
  }
)
