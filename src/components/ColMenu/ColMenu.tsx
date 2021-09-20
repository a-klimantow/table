import { memo, useRef, useMemo } from 'react'
import { useLocalObservable, Observer } from 'mobx-react-lite'
import { action } from 'mobx'
import { Popover, IconButton, Switch } from '@material-ui/core'

import { ICol } from 'types'
import { Icon } from 'components'

const initialState = {
  open: false,
  toggle() {
    this.open = !this.open
  },
}

interface ColMenuProps {
  columns: ICol[]
}

export const ColMenu = memo<ColMenuProps>(({ columns }) => {
  const menu = useLocalObservable(() => initialState)
  const ref = useRef(null)

  const renderList = useMemo(
    () =>
      columns.map((c) => (
        <div key={c.key}>
          <Observer>
            {() => (
              <Switch
                checked={!c.hidden}
                onChange={action(() => (c.hidden = !c.hidden))}
              />
            )}
          </Observer>
          {c.name}
        </div>
      )),
    [columns]
  )

  return (
    <>
      <IconButton ref={ref} onClick={() => menu.toggle()}>
        <Icon type="col_menu" />
      </IconButton>
      <Observer>
        {() => (
          <Popover
            open={menu.open}
            onClose={() => menu.toggle()}
            anchorEl={ref.current}
          >
            {renderList}
          </Popover>
        )}
      </Observer>
    </>
  )
})
