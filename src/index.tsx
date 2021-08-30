import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { GlobalThemeProvider } from './theme'
import { Snackbar } from './components/Snackbar/Snackbar';

ReactDOM.render(
  <BrowserRouter>
    <GlobalThemeProvider>
      <Snackbar>
        <App />
      </Snackbar>
    </GlobalThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
