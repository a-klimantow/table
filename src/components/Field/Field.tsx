import { observer } from 'mobx-react-lite'
import { TextField, TextFieldProps, IconButton } from '@material-ui/core'

import { Icon } from 'components'

export type FieldProps = TextFieldProps & {
  onPassToggle?(): void
}

export const Field = observer<{ field: FieldProps }>(({ field }) => {
  const { onPassToggle, ...rest } = field
  return (
    <TextField
      {...rest}
      InputProps={{
        endAdornment: onPassToggle ? (
          <IconButton onClick={onPassToggle}>
            <Icon type={rest.type === 'password' ? 'eye_off' : 'eye_on'} />
          </IconButton>
        ) : null,
      }}
    />
  )
})
