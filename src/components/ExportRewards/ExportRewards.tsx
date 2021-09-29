import { observer } from 'mobx-react-lite'
import { Button, Drawer } from '@material-ui/core'

import { ExportContext } from './context'
import { ExportStore } from './store'
import { useFetch } from './useFetch'

import { Lists } from './Lists'

export const ExportRrewards = observer<{ exp: ExportStore }>(({ exp }) => {
  useFetch(exp)
  return (
    <ExportContext.Provider value={exp}>
      <Button onClick={exp.open}>Экспорт</Button>
      <Drawer open={exp.isOpen} onClose={exp.close} anchor="right">
        <Lists />
      </Drawer>
    </ExportContext.Provider>
  )
})
