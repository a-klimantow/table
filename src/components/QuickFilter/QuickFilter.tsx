import React from 'react'
import {
  Paper,
  InputBase,
  InputBaseProps,
  IconButton,
  ThemeProvider,
} from '@material-ui/core'
import {
  Search as SearchIcon,
  CancelSharp as CancelIcon,
} from '@material-ui/icons'
import { observer } from 'mobx-react-lite'

import { useQFilterTheme } from './useQFilterTheme'

type QuickFilterProps = Pick<InputBaseProps, 'value' | 'onChange'> & {
  onCancel?(): void
  showCancel?: boolean
}

export const QuickFilter = observer<QuickFilterProps>(
  ({ value, onChange, onCancel, showCancel }) => {
    const theme = useQFilterTheme()
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <SearchIcon />
          <InputBase value={value} onChange={onChange} />
          {showCancel && (
            <IconButton onClick={onCancel}>
              <CancelIcon />
            </IconButton>
          )}
        </Paper>
      </ThemeProvider>
    )
  }
)
