import * as React from 'react'
import * as Mui from '@mui/material'
import { useBreadCrumbs } from './hooks'

export const Breadcrumbs = () => {
  const state = useBreadCrumbs()
  console.log(state)
  return (
    <Mui.Breadcrumbs aria-label='breadcrumb'>
    </Mui.Breadcrumbs>
  )
}