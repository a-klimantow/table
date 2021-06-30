import { FC, useReducer, useMemo } from 'react'

import { IDataGridState, IDataGridProps } from './types'
import { DataGridContext, DataGridActionContext } from './context'
import { reducer } from './reducer'

const initialState: IDataGridState = {
  columns: [],
  data: [],
  filters: [],
  search: '',
  selected: [],
  hiddenFields: [],
}

function initState<S extends IDataGridState>(state: S): S {
  return { ...state, filters: state.columns.map((c) => c) }
}

export const DataGridProvider: FC<IDataGridProps> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...props }, initState)

  const { columns, hiddenFields } = state

  const memoColumns = useMemo(() => columns.filter((c) => !hiddenFields.includes(c.field)), [
    columns,
    hiddenFields,
  ])

  return (
    <DataGridContext.Provider
      value={{
        ...state,
        memoColumns,
      }}
    >
      <DataGridActionContext.Provider
        value={{
          handleChangeSearch: ({ currentTarget: { value } }) =>
            dispatch({ type: 'search_change', value }),

          handleChangeHidden: (field) => ({ currentTarget: { checked: hidden } }) =>
            dispatch({ type: 'change_hidden', field, hidden }),

          handleChangeHiddenAll: (hidden) => () => dispatch({ type: 'change_hidden_all', hidden }),
        }}
      >
        {children}
      </DataGridActionContext.Provider>
    </DataGridContext.Provider>
  )
}
