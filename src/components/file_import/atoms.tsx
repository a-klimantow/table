import * as React from 'react'
import * as Mui from '@mui/material'
//
import * as Btn from '../buttons'
import { StoreType as ST } from './store'
import { observer } from 'mobx-react-lite'

export const Button = Btn.Import

export const Menu = observer<{ store: ST }>(({ store, children }) => (
  <Mui.Menu {...store.menu}>{children}</Mui.Menu>
))

export const Items = React.memo<{ store: ST }>(({ store }) => {
  return (
    <React.Fragment>
      {store.items.map((item) => (
        <Mui.MenuItem key={item.key} sx={{ padding: 0 }}>
          <Mui.Typography component="label" sx={{ py: 1, px: 2 }}>
            {item.name}
            <input type="file" hidden onChange={item.onChange} />
          </Mui.Typography>
        </Mui.MenuItem>
      ))}
    </React.Fragment>
  )
})
