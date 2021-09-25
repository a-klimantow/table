import { observer } from 'mobx-react-lite'
import { Popover, IconButton } from '@material-ui/core'

import { ICol } from 'types'
import { Icon } from 'components'
import { useColMenu } from './useColMenu'
import { Menu } from './atoms'

export const ColMenu = observer<{ columns: ICol[] }>(({ columns }) => {
  const { menu, ref } = useColMenu()

  return (
    <>
      <IconButton ref={ref} onClick={() => menu.toggle('open')}>
        <Icon type="col_menu" />
      </IconButton>
      <Popover
        open={menu.open}
        onClose={() => menu.toggle('close')}
        anchorEl={ref.current}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Menu columns={columns} />
      </Popover>
    </>
  )
})
