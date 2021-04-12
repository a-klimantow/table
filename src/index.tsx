import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { GlobalThemeProvider } from './theme'

ReactDOM.render(
  <BrowserRouter>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
