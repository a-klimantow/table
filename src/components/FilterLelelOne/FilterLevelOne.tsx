import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
<<<<<<< HEAD
import f from 'odata-filter-builder'
import buildQuery from 'odata-query'
=======
>>>>>>> a2e6a543b739fbb793c2c9cf2bc4b2d3c64de653
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
<<<<<<< HEAD
  private arrKeys: string[]

  constructor(arrKeys?: string[]) {
    makeAutoObservable(this)
    this.arrKeys = arrKeys ?? []
  }

  private changeValue(value: string) {
=======

  constructor() {
    makeAutoObservable(this)
  }

  changeValue(value: string) {
>>>>>>> a2e6a543b739fbb793c2c9cf2bc4b2d3c64de653
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
<<<<<<< HEAD

  get query(): string {
    if (!this.arrKeys.length || !this.value) return ''

    const qf = f('or')

    this.arrKeys.forEach((key) => {
      qf.contains((x) => x.toLower(key), this.value.toLowerCase())
    })

    return buildQuery({ filter: qf.toString() }).slice(1)
  }
=======
>>>>>>> a2e6a543b739fbb793c2c9cf2bc4b2d3c64de653
}
