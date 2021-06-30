import { Reducer } from 'react'

import { IDataGridState, ActionsType } from './types'

export const reducer: Reducer<IDataGridState, ActionsType> = (state, action) => {
  switch (action.type) {
    case 'search_change':
      return { ...state, search: action.value }

    case 'change_hidden': {
      return {
        ...state,
        hiddenFields: action.hidden
          ? state.hiddenFields.filter((h) => h !== action.field)
          : [...state.hiddenFields, action.field],
      }
    }

    case 'change_hidden_all': {
      return {
        ...state,
        hiddenFields: action.hidden ? state.columns.map(({ field }) => field) : [],
      }
    }
    default:
      console.error(action)
      return state
  }
}
