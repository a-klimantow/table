import { observer } from 'mobx-react-lite'

import { Field } from 'components'
import { Page, Form, SubmitButton, PageLoader } from './atoms'
import { useLoginPage } from './useLoginPage'

export const LoginPage = observer(() => {
  const page = useLoginPage()
  return (
    <Page>
      <Form submit={(e) => page.submit(e)}>
        <Field field={page.email} />
        <Field field={page.password} />
        <SubmitButton button={page.button} />
      </Form>
      <PageLoader loader={page.loader} />
    </Page>
  )
})
