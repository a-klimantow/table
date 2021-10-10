import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Observer } from 'mobx-react-lite'
//
import { useDefaultPages } from './hooks'

type BlockProps = Pick<Mui.StackProps, 'children'> & { title: string }
type State = ReturnType<typeof useDefaultPages>

// page wrapper

export const Page = React.memo<{ children: React.ReactNode }>(
  ({ children }) => (
    <Mui.Stack mx={3} my={4} minWidth={440} flex={1} gap={4}>
      <Mui.Typography variant="h5">Настройки пользователя</Mui.Typography>
      {children}
    </Mui.Stack>
  )
)

// block items page

export const Block = React.memo<BlockProps>(({ children, title }) => (
  <Mui.Stack gap={2}>
    <Mui.Typography variant="h6">{title}</Mui.Typography>
    {children}
  </Mui.Stack>
))

// user email

interface EmailProps {
  state: State
}

export const Email = React.memo<EmailProps>(({ state }) => (
  <Mui.TextField defaultValue={state.email} InputProps={{ readOnly: true }} />
))

// user default page

interface DefPagesProps {
  state: State
}

export const DefautlPages = React.memo<DefPagesProps>(({ state }) => (
  <Mui.RadioGroup
    defaultValue={state.defPage}
    onChange={(e) => state.changeDefPage(e.currentTarget.value)}
  >
    {state.items.map((i) => (
      <Mui.FormControlLabel
        control={<Mui.Radio />}
        key={i.label}
        label={i.label}
        value={i.value}
        disabled={i.disabled}
      />
    ))}
  </Mui.RadioGroup>
))

// buttons

interface ButtonsProps {
  state: State
}

export const Buttons = React.memo<ButtonsProps>(({ state }) => {
  const { goBack } = useHistory()
  return (
    <Mui.Stack direction="row" mt="auto" gap={3}>
      <Mui.Button variant="outlined" onClick={goBack}>
        Отменить
      </Mui.Button>
      <Observer>
        {() => (
          <Mui.Button variant="contained" disabled={state.disabled}>
            Сохранить
          </Mui.Button>
        )}
      </Observer>
    </Mui.Stack>
  )
})
