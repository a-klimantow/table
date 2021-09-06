import { observer } from 'mobx-react-lite'

import { OutlinedInput } from '@material-ui/core'

import { Provider, SearchIcon, Button } from './atoms'
import { useSearch } from './useSearch'

export interface SearchProps {
  search: { value: string }
}

export const Search = observer<SearchProps>((props) => {
  const state = useSearch(props)
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
