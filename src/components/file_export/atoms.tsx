import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
import { IObservableArray } from 'mobx'

import { IListItem as I } from 'types'
import * as Btn from 'components/buttons'

// ============

export const Button = Btn.Export

export const Cancel = Mui.Button

export const Submit = Btn.Submit

export const Drawer = Mui.Drawer

// ============

export const Inner = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack {...props} mx={4} my={3} width={440} height="100%" gap={4} />
))

export const Title = React.memo(() => (
  <Mui.Typography variant="subtitle1">Экспорт заявок</Mui.Typography>
))

export const Subtitle = React.memo<Mui.TypographyProps>((props) => (
  <Mui.Typography {...props} variant="subtitle2" />
))

export const Block = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack {...props} />
))

export const Bottom = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack {...props} direction="row" mt="auto" gap={2} />
))

interface ListProps {
  list: IObservableArray<I>
  children(item: I): React.ReactNode
}

export const List = observer<ListProps>(({ list, children }) => {
  if (!list.length) return <Mui.CircularProgress />
  return <React.Fragment>{list.map(children)}</React.Fragment>
})

type ListItemProps = (Mui.CheckboxProps | Mui.RadioProps) & {
  radio?: boolean
}

export const ListItem = React.memo<ListItemProps>(({ radio, ...props }) => {
  const Switch = radio ? Mui.Radio : Mui.Checkbox
  return (
    <Mui.Typography
      component="label"
      sx={{
        display: 'flex',
        placeItems: 'center',
        ml: -1,
        gap: 1,
        cursor: 'pointer',
      }}
    >
      <Switch
        disabled={props.disabled}
        onChange={props.onChange}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
      />
      {props.name}
    </Mui.Typography>
  )
})

export const Loader = React.memo<{ show: boolean }>(({ show }) =>
  show ? <Mui.CircularProgress /> : null
)
