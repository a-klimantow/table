import * as Mobx from 'mobx-react-lite'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'

import { useSearch } from './hooks'

export const Search = Mobx.observer(() => {
  const search = useSearch()
  return (
    <Mui.ThemeProvider theme={theme}>
      <Mui.Paper>
        <Icon.Search />
        <Mobx.Observer>
          {() => <Mui.InputBase {...search.input} />}
        </Mobx.Observer>
        <Mobx.Observer>
          {() =>
            search.showButton ? (
              <Mui.IconButton {...search.button}>
                <Icon.Clear />
              </Mui.IconButton>
            ) : null
          }
        </Mobx.Observer>
      </Mui.Paper>
    </Mui.ThemeProvider>
  )
})

const theme = Mui.createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
        sx: {
          width: 230,
          height: 38,
          display: 'flex',
          placeItems: 'center',
          px: 1,
          gap: 1,
          border: 1,
          borderColor: 'transparent',
          ':focus-within': {
            borderColor: 'primary.light',
          },
        },
      },
    },

    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small',
        color: 'action',
      },
    },

    MuiInputBase: {
      defaultProps: {
        placeholder: 'Поиск...',
        sx: { fontSize: 14 },
      },
    },
  },
})
