import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider} from 'notistack';

import { App } from './App'
import { GlobalThemeProvider } from './theme'

ReactDOM.render(
  <BrowserRouter>
    <GlobalThemeProvider>
      <SnackbarProvider maxSnack={2} anchorOrigin={{vertical: 'top',horizontal: 'right'}}>
        <App />
      </SnackbarProvider>
    </GlobalThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
