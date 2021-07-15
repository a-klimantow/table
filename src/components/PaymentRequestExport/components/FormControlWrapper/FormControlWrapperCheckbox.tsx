import { FC } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroupProps,
  Typography,
  FormGroup,
} from '@material-ui/core'

interface IFormControlWrapperCheckboxProps {
  title: string
  formGroup?: FormGroupProps
  checkboxList?: { title: string; key: string }[]
  //onChange(event: React.ChangeEvent<HTMLInputElement>): void
  value?: string | number
  className?: string
}

export const FormControlWrapperCheckbox: FC<IFormControlWrapperCheckboxProps> = ({
  title,
  formGroup = {},
  checkboxList = [],
  className,
}) => {
  return (
    <>
      <FormControl component="fieldset" className={className}>
        <FormLabel component="legend">
          <Typography variant="body1">{title}</Typography>
        </FormLabel>
        <FormGroup {...formGroup}>
          {checkboxList.map(({ key, title }) => (
            <FormControlLabel key={key} value={title} control={<Checkbox />} label={title} />
          ))}
        </FormGroup>
      </FormControl>
    </>
  )
}
