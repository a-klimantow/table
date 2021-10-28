import * as React from 'react'
import * as Mui from '@mui/material'
import { useBreadCrumbsStateExport } from './hooks'
import { useHistory } from 'react-router-dom'

export const Breadcrumbs = () => {
  const history = useHistory()
  const state = useBreadCrumbsStateExport()
  return (
    <Mui.Breadcrumbs aria-label='breadcrumb'>
      {state.renderLink(history)}
    </Mui.Breadcrumbs>
  )
}