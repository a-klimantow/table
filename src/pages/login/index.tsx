import * as React from 'react'

import { Provider, Page, Title, Form } from './atoms'

export const Login = React.memo(() => (
  <Provider>
    <Page>
      <Title />
      <Form />
    </Page>
  </Provider>
))
