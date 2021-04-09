import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { App } from './App'
import { GlobalThemeProvider } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
