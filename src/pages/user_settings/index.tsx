import { useDefaultPages } from './hooks'
import { Page, Block, Email, DefautlPages, Buttons } from './atoms'

export const UserSettings = () => {
  const state = useDefaultPages()
  return (
    <Page>
      <Block title="Почта">
        <Email state={state} />
      </Block>
      <Block title="Главная страница по умолчанию">
        <DefautlPages state={state} />
      </Block>
      <Buttons state={state} />
    </Page>
  )
}
