import { memo } from 'react'
import { SvgIconProps } from '@material-ui/core'

import mui from './mui_icons'

export type IconType = keyof typeof mui

interface IconProps extends SvgIconProps {
  type: IconType
}

export const Icon = memo<IconProps>(({ type, ...rest }) => {
  const Component = mui[type]
  return <Component {...rest} />
})
