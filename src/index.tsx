import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { GlobalTheme } from 'theme'
import { App, AppStoreProvider } from 'app'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
        <GlobalTheme>
          <App />
        </GlobalTheme>
      </AppStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
