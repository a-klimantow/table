import { FC } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Typography,
} from '@material-ui/core'

interface IFormControlWrapProps {
  title: string
  type: 'radio' | 'checkbox'
  radioGroup?: RadioGroupProps
  radioList?: { title: string; key: string }[]
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  value: string | number
  className?: string
}

export const FormControlWrapperRadio: FC<IFormControlWrapProps> = ({
  title,
  type,
  radioGroup = {},
  radioList = [],
  onChange,
  value,
  className,
}) => {
  return (
    <>
      <FormControl component="fieldset" className={className}>
        <FormLabel component="legend">
          <Typography variant="body1">{title}</Typography>
        </FormLabel>

        {type === 'radio' ? (
          <RadioGroup {...radioGroup} onChange={onChange} value={value}>
            {radioList.map(({ key, title }) => (
              <FormControlLabel key={key} value={key} control={<Radio />} label={title} />
            ))}
          </RadioGroup>
        ) : null}
      </FormControl>
    </>
  )
}
