import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import * as Btn from 'components/buttons'
import { StateType as S } from './store'

const Button = Btn.Import

export const Menu = observer<{ state: S }>(({ state }) => (
  <>
    <Button onClick={(e) => state.setAnchor(e.currentTarget)} />
    <Mui.Menu
      open={Boolean(state.anchor)}
      anchorEl={state.anchor}
      onClose={() => state.setAnchor(null)}
    >
      {state.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      {!state.list && <Mui.CircularProgress sx={{ my: 1, mx: 2 }} />}
    </Mui.Menu>
  </>
))

type ItemProps = { item: S['items'][number] }

const Item = observer<ItemProps>(({ item }) => (
  <Mui.MenuItem sx={{ padding: 0 }}>
    <Mui.Typography component="label" sx={{ py: 1, px: 2 }}>
      {item.name}
      <input type="file" hidden onChange={item.change} />
    </Mui.Typography>
  </Mui.MenuItem>
))
