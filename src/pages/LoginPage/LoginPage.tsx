import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { Layout, Title, Email, Password, SubmitButton } from './atoms'
import { useLoginForm } from './useForm'

export const LoginPage = observer(() => {
  const form = useLoginForm()
  return (
    <Layout>
      <Title />
      <form>
        <Email email={form.email} />
        <Password password={form.password} />
        <SubmitButton button={toJS(form.button)} />
      </form>
    </Layout>
  )
})
