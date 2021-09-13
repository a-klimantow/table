import { observer } from 'mobx-react-lite'

import { Field } from 'components'
import { Layout, Title, SubmitButton } from './atoms'
import { useLoginForm } from './useForm'

export const LoginPage = observer(() => {
  const { email, password, button } = useLoginForm()
  return (
    <Layout>
      <Title />
      <form>
        <Field field={email} />
        <Field field={password} />
        <SubmitButton button={button} />
      </form>
    </Layout>
  )
})
