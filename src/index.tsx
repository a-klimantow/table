import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { NotificationProvider } from 'notification'
import { GlobalTheme } from 'theme'
import { App } from 'app'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalTheme>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </GlobalTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
