import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App, AppProvider } from './App'
import { GlobalThemeProvider } from './theme'
import { Snackbar } from './components/Snackbar'

ReactDOM.render(
  <BrowserRouter>
    <GlobalThemeProvider>
      <Snackbar>
        <AppProvider>
          <App />
        </AppProvider>
      </Snackbar>
    </GlobalThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
