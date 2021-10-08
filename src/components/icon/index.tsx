import { memo } from 'react'
import { SvgIconProps } from '@material-ui/core'

import { mui_icons } from 'assets'
import { IconType as I } from 'types'

interface Props extends SvgIconProps {
  type: I
}

export const Icon = memo<Props>(({ type, ...rest }) => {
  const Component = mui_icons[type]
  return <Component {...rest} />
})
