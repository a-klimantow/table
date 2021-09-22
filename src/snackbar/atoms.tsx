import { FC, ReactNode } from 'react'
import { IconVariant } from 'notistack'

import { Icon, IconType } from 'components'

import { Box } from '@material-ui/system'

export const SnackIcon: FC<{ type: IconType }> = ({ type }) => (
  <Box sx={{ display: 'inline-flex', mr: 1.5 }}>
    <Icon type={type} />
  </Box>
)

export const icons: Record<keyof IconVariant, ReactNode> = {
  info: <SnackIcon type="error" />,
  default: <SnackIcon type="error" />,
  error: <SnackIcon type="error" />,
  success: <SnackIcon type="success" />,
  warning: <SnackIcon type="warning" />,
}
