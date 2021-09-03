import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
import f from 'odata-filter-builder'
import buildQuery from 'odata-query'

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

  private arrKeys: string[]

  constructor(arrKeys?: string[]) {
    makeAutoObservable(this)
    this.arrKeys = arrKeys ?? []
  }

  private changeValue(value: string) {
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

  get query(): string {
    if (!this.arrKeys.length || !this.value) return ''

    const qf = f('or')

    this.arrKeys.forEach((key) => {
      qf.contains((x) => x.toLower(key), this.value.toLowerCase())
    })

    return buildQuery({ filter: qf.toString() }).slice(1)
  }
}
