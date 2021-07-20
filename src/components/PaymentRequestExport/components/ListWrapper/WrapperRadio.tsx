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
  radioGroup?: RadioGroupProps
  radioList?: { title: string; key: string }[]
  onChange: RadioGroupProps['onChange']
  value: RadioGroupProps['value']
  className?: string
}

export const WrapperRadio: FC<IFormControlWrapProps> = ({
  title,
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

        <RadioGroup {...radioGroup} onChange={onChange} value={value}>
          {radioList.map(({ key, title }) => (
            <FormControlLabel key={key} value={key} control={<Radio />} label={title} />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  )
}
