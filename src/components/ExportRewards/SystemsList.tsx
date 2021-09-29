import { useEffect } from 'react'
import { action } from 'mobx'
import { Observer } from 'mobx-react-lite'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core'

import { useGetLists } from 'hooks'
import { useExportContext } from './context'

export const SystemsList = () => {
  const exp = useExportContext()
  const systems = useGetLists('list/payment-systems')

  useEffect(() => {
    if (systems) {
      const [{ name }] = systems
      action(() => (exp.system = name))()
    }
  }, [exp, systems])

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Платежная система</FormLabel>
      <Observer>
        {() => (
          <RadioGroup
            value={exp.system}
            onChange={action((e) => (exp.system = e.target.value))}
          >
            {systems?.map((s) => (
              <FormControlLabel
                key={s.name}
                value={s.name}
                label={s.common_name}
                control={<Radio size="small" />}
              />
            ))}
          </RadioGroup>
        )}
      </Observer>
    </FormControl>
  )
}
