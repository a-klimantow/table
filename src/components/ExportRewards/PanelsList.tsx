import { action } from 'mobx'
import { observer } from 'mobx-react-lite'

import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@material-ui/core'

import { useGetLists } from 'hooks'
import { useExportContext } from './context'

export const PanelsList = () => {
  const panels = useGetLists('list/panels')
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Платежная система</FormLabel>
      <FormGroup>
        {panels?.map((p) => (
          <PanelsListItem key={p.name} item={p} />
        ))}
      </FormGroup>
    </FormControl>
  )
}

type ItemType = NonNullable<ReturnType<typeof useGetLists>>[number]

const PanelsListItem = observer<{ item: ItemType }>(({ item }) => {
  const exp = useExportContext()

  const isChecked = exp.panelIds.includes(item.id)
  const change = action(() =>
    isChecked
      ? (exp.panelIds = exp.panelIds.filter((id) => id !== item.id))
      : exp.panelIds.push(item.id)
  )

  return (
    <FormControlLabel
      control={<Checkbox size="small" checked={isChecked} onChange={change} />}
      label={item.common_name}
      disabled={exp.disabledPanels}
    />
  )
})
