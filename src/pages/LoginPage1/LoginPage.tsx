import { observer } from 'mobx-react-lite'

import { Field } from 'components'
import { Page, Title, Form } from './atoms'
import { useLoginForm } from './useLoginForm'

export const LoginPage = observer(() => {
  const form = useLoginForm()
  return (
    <Page>
      <Title />
      <Form form={form}>
        <Field field={form.email} />
        <Field field={form.password} />
      </Form>
    </Page>
  )
})
