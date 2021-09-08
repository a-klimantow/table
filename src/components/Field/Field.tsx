import { observer } from 'mobx-react-lite'
import { TextField, TextFieldProps } from '@material-ui/core'

import { Provider, Button } from './atoms'

export type FieldProps = TextFieldProps & {
  onPassToggle?(): void
}

export const Field = observer<{ field: FieldProps }>(({ field }) => {
  const { onPassToggle, ...rest } = field
  return (
    <Provider>
      <TextField
        {...rest}
        InputProps={
          onPassToggle
            ? {
                endAdornment: (
                  <Button
                    click={onPassToggle}
                    hidden={field.type === 'password'}
                  />
                ),
              }
            : undefined
        }
      />
    </Provider>
  )
})
