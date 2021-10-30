import * as React from 'react'
import * as Mui from '@mui/material'
import * as mobx from 'mobx'

import { TableType as T } from '../types'

const usePopover = () => React.useState<null | Element>(null)

export const useMenuColumns = (table: T) => {
  const [anchor, setAncor] = usePopover()
  return {
    button: {
      onClick: (e) => setAncor(e.currentTarget),
    } as Mui.IconButtonProps,

    popover: {
      open: !!anchor,
      anchorEl: anchor,
      onClose: () => setAncor(null),
    } as Mui.PopoverProps,

    items: table.columns.map((col) => ({
      key: col.key,
      name: col.name,
      hidden: () => !col.hidden,
      changeHidden: mobx.action(() => (col.hidden = !col.hidden)),
    })),

    hiddenAll: mobx.action(
      (b: boolean) => () =>
        table.columns.forEach((c) => {
          c.hidden = b
        })
    ),
  }
}
