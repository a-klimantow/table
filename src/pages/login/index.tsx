import { observer } from 'mobx-react-lite'

import { Page, Title, Form, Email, Password, Button } from './atoms'
import { useLoginStore } from './store'

export const Login = observer(() => {
  const store = useLoginStore()
  return (
    <Page>
      <Title />
      <Form>
        <Email email={store.email} />
        <Password password={store.password} />
        <Button store={store} />
      </Form>
    </Page>
  )
})
