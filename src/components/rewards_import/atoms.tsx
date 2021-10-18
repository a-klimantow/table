import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'

import { paymentNames } from 'assets'
import { Icon } from 'components/icon'
import { useStore } from './store'
import { ImportContext, useImportContext } from './context'
import { useHandleChange, useFetch } from './hooks'

export const Provider = observer(({ children }) => {
  const store = useStore()
  useFetch(store)
  return (
    <ImportContext.Provider value={store}>{children}</ImportContext.Provider>
  )
})

export const Button = React.memo(() => {
  const imp = useImportContext()
  return (
    <Mui.Button
      startIcon={<Icon type="import" />}
      onClick={(e) => imp.setAnchor(e.currentTarget)}
    >
      Импорт
    </Mui.Button>
  )
})

const items = ['yookassa', 'webmoney'] as const

export const Menu = observer(() => {
  const imp = useImportContext()
  return (
    <Mui.Menu
      open={Boolean(imp.anchor)}
      anchorEl={imp.anchor}
      onClose={() => imp.setAnchor(null)}
    >
      {items.map((name) => (
        <Item key={name} name={name} />
      ))}
    </Mui.Menu>
  )
})

const Item = React.memo<{ name: typeof items[number] }>(({ name }) => {
  const change = useHandleChange(name)
  return (
    <Mui.MenuItem sx={{ padding: 0 }}>
      <Mui.Typography component="label" sx={{ py: 1, px: 2 }}>
        {paymentNames.get(name)}
        <input type="file" hidden onChange={change} />
      </Mui.Typography>
      <Loader name={name} />
    </Mui.MenuItem>
  )
})

const Loader = observer<{ name: string }>(({ name }) => {
  const imp = useImportContext()
  if (imp.data && name === imp.url)
    return (
      <Mui.LinearProgress
        sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
      />
    )

  return null
})
