import { Page, Title, Form, Email, Password, Button } from './atoms'
import { useLogin } from './hooks'
import { LoginContextProvider } from './context'

export const Login = () => {
  const state = useLogin()
  return (
    <LoginContextProvider value={state}>
      <Page>
        <Title>Panel Rider</Title>
        <Form>
          <Email />
          <Password />
          <Button />
        </Form>
      </Page>
    </LoginContextProvider>
  )
}
