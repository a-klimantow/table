import * as React from 'react'
import * as Mui from '@mui/material'
import { useLocalObservable } from 'mobx-react-lite'

type History = {
  location: { pathname: string }
  push: ( path: string ) => void
}

const breadCrumbOptionList = [
  {
    path: '/rewards/requests',
    value: ['Вознагрождения', 'Заявки']
  },
  {
    path: '/rewards/accruals/',
    value: ['Вознагрождения', 'Начисления']
  },
  {
    path: '/rewards/requests/',
    value: ['Вознагрождения', 'Заявки']
  },
  {
    path: '/rewards/reports/',
    value: ['Вознагрождения', 'Отчеты']
  }
]

export const useBreadCrumbsStateExport = () =>
  useLocalObservable(() => ({
    renderLink(history: History) {
      const location = breadCrumbOptionList.filter(item => item.path === history.location.pathname)

      const getHistoryDict = () => {
        if (location.length === 0) {
          return []
        }
        return location
      }

      const Value = getHistoryDict().map(item => item.value)
      const OptionList = Value.flat()
      let dict: object[] = []

      if (OptionList.length === 1) {
        dict = OptionList.map(row => {
          return <Mui.Link key={0} color='text.primary'>{row}</Mui.Link>
        })
      }

      if (OptionList.length >= 2) {
        const lastItem = OptionList.pop()

        dict = OptionList.map(row => {
          return <Mui.Link key={row} underline='none' color='inherit'>{row}</Mui.Link>
        })
        const lastElement = getHistoryDict().map(item => {
          return <Mui.Link onClick={() => history.push(item.path)} key={0} underline='hover' color='text.primary'>{lastItem}</Mui.Link>
        })
        dict.push(lastElement)
      }
      return dict
    }
  }))
