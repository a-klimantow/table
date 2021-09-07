import { memo } from 'react'
import { SvgIconProps } from '@material-ui/core'

import mui from './mui_icons'

interface IconProps extends SvgIconProps {
  type: keyof typeof mui
}

export const Icon = memo<IconProps>(({ type, ...rest }) => {
  const Component = mui[type]
  return <Component {...rest} />
})
