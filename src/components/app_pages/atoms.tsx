import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
//
import { PageType as P } from 'types'

export const DrawerPages = observer<{ pages: P[] }>(({ children, pages }) => {
  const { goBack, location } = useHistory()
  return (
    <Mui.Drawer
      open={pages.some((p) => location.hash.endsWith(p))}
      anchor="right"
      onClose={goBack}
    >
      {children}
    </Mui.Drawer>
  )
})
