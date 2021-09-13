import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App, AppStoreProvider } from './App'
import React from 'react'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
        <App />
      </AppStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
