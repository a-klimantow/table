import { observer } from 'mobx-react-lite'
import {
  Button,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from '@material-ui/core'

import { useGetLists } from 'hooks'
import { ExportContext } from './context'
import { ExportStore } from './store'
import { ExportButton, ExportDrawer, Title } from './atoms'
import { SystemsList } from './SystemsList'
import { StatusesList } from './StatusesList'
import { PanelsList } from './PanelsList'

export const ExportRrewards = observer<{ exp: ExportStore }>(({ exp }) => (
  <ExportContext.Provider value={exp}>
    <ExportButton />
    <ExportDrawer>
      <Title />
      <SystemsList />
      <StatusesList />
      <PanelsList />
    </ExportDrawer>
  </ExportContext.Provider>
))

const Export = () => {
  const systems = useGetLists('list/payment-systems')
  const statuses = useGetLists('list/withdrawal-statuses')
  const panels = useGetLists('list/panels')
  return (
    <Stack gap={3} px={3} py={4} minHeight="100%">
      <Typography variant="subtitle1" fontSize={22}>
        Экспорт заявок
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Платежная система</FormLabel>
        <RadioGroup defaultValue="1">
          {systems?.map((s) => (
            <FormControlLabel
              key={s.name}
              value={String(s.id)}
              label={s.common_name}
              control={<Radio size="small" />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Статус заявки</FormLabel>
        <RadioGroup defaultValue="0">
          {statuses?.map((s) => (
            <FormControlLabel
              key={s.name}
              value={String(s.id)}
              label={s.common_name}
              control={<Radio size="small" />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Панели</FormLabel>
        <FormGroup>
          {panels?.map((p) => (
            <FormControlLabel
              key={p.name}
              value="1"
              control={<Checkbox size="small" />}
              label={p.common_name}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Stack direction="row" gap={1} mt="auto">
        <Button variant="outlined">Отменить</Button>
        <Button variant="contained">Экспортировать</Button>
      </Stack>
    </Stack>
  )
}
