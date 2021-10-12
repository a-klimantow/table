import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { SnackbarProvider } from 'snackbar'
import { GlobalTheme } from 'theme'
import { App } from 'app'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalTheme>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </GlobalTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
