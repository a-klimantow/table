import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import * as Btn from 'components/buttons'
import { useImportState } from './hooks'

const Button = Btn.Import

export const MenuFileImport = observer(() => {
  const { menu, loading, items } = useImportState()
  return (
    <>
      <Button onClick={(e) => menu.setAnchor(e.currentTarget)} />
      <Mui.Menu
        open={Boolean(menu.anchor)}
        anchorEl={menu.anchor}
        onClose={() => menu.setAnchor(null)}
      >
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}

        {loading.get() && <Mui.CircularProgress sx={{ my: 1, mx: 2 }} />}
      </Mui.Menu>
    </>
  )
})

type ItemProps = ReturnType<typeof useImportState>['items'][number]

const Item = observer<{ item: ItemProps }>(({ item }) => (
  <Mui.MenuItem sx={{ padding: 0 }}>
    <Mui.Typography component="label" sx={{ py: 1, px: 2 }}>
      {item.name}
      <input type="file" hidden onChange={(e) => item.changeData(item, e)} />
    </Mui.Typography>
  </Mui.MenuItem>
))
