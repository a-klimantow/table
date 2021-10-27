import * as React from 'react'
import * as Mui from '@mui/material'
import { useStateExport } from './hooks'

export const Breadcrumbs = () => {
  const state = useStateExport()

  const location = state.breadCrumbOptionList.filter(item => item.path === state.currentPath())

  const getDict = () => {
    if (location.length === 0) {
      return []
    }
    return location
  }

  const renderLink = () => {
    const Value = getDict().map(item => item.value)
    const OptionList = Value.flat()
    let dict: any = []

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
      const lastElement = getDict().map(item => {
        return <Mui.Link href={item.path} key={0} underline='hover' color='text.primary'>{lastItem}</Mui.Link>
      })
      dict.push(lastElement)
    }
    return dict
  }


  return (
    <Mui.Breadcrumbs aria-label='breadcrumb'>
      {renderLink()}
    </Mui.Breadcrumbs>
  )
}