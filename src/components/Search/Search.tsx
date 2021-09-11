import { observer } from 'mobx-react-lite'

import { OutlinedInput, OutlinedInputProps } from '@material-ui/core'

import { Provider, SearchIcon, Button } from './atoms'
import { useSearch } from './useSearch'

export interface SearchProps {
  value: string
  update?(s: string): void
}

export const Search = observer<{ search: SearchProps }>(({ search }) => {
  const state = useSearch(search)

  return (
    <Provider>
      <OutlinedInput
        startAdornment={<SearchIcon />}
        endAdornment={<Button show={state.showClear} clear={state.clear} />}
        value={state.value}
        onChange={state.change}
      />
    </Provider>
  )
})
