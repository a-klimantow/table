import * as React from 'react'
import * as Mui from '@mui/material'
import { useBreadCrumbs } from './hooks'

export const Breadcrumbs = () => {
  const links = useBreadCrumbs()

  return (
    <Mui.Breadcrumbs>
      {links.map(({ key, ...rest }) => (
        <Mui.Link {...rest} key={key} />
      ))}
    </Mui.Breadcrumbs>
  )
}
