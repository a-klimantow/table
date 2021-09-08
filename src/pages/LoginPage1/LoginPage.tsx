import { Page, Field } from './atoms'
import { useLoginPage } from './useLoginPage'

export const LoginPage = () => {
  const { email, password } = useLoginPage()
  return (
    <Page>
      <Field field={email} />
      <Field field={password} password />
    </Page>
  )
}
