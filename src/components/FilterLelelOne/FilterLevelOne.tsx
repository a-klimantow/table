import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
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

import { useTheme } from './useTheme'

type FilterLevelOneProps = Pick<InputBaseProps, 'value' | 'onChange'> & {
  showClear: boolean
  onClear(): void
}

export const FilterLevelOne = observer<FilterLevelOneProps>(
  ({ value, onChange, showClear, onClear }) => (
    <ThemeProvider theme={useTheme()}>
      <Paper>
        <SearchIcon />
        <InputBase value={value} onChange={onChange} />
        {showClear && (
          <IconButton onClick={onClear}>
            <CancelIcon />
          </IconButton>
        )}
      </Paper>
    </ThemeProvider>
  )
)

export class FilterLevelOneStore {
  private value = ''

  constructor() {
    makeAutoObservable(this)
  }

  changeValue(value: string) {
    this.value = value
  }

  get props(): FilterLevelOneProps {
    return {
      value: this.value,
      onChange: (e) => this.changeValue(e.target.value),
      onClear: () => this.changeValue(''),
      showClear: Boolean(this.value.trim()),
    }
  }
}
