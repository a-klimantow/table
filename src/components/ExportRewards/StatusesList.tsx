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

export const StatusesList = () => {
  const exp = useExportContext()
  const statuses = useGetLists('list/withdrawal-statuses')

  useEffect(() => {
    if (statuses) {
      const [{ name }] = statuses
      action(() => (exp.status = name))()
    }
  }, [exp, statuses])

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Платежная система</FormLabel>
      <Observer>
        {() => (
          <RadioGroup
            value={exp.status}
            onChange={action((e) => (exp.status = e.target.value))}
          >
            {statuses?.map((s) => (
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
