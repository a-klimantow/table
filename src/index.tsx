import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { SnackbarProvider } from 'snackbar'
import { GlobalTheme } from 'theme'
import { AppContextProvider } from 'stores'
import { App } from 'app'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <GlobalTheme>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </GlobalTheme>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
