import { Omit, styled, SvgIconProps, Theme, IconProps, SvgIconTypeMap } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

interface Props {
  openMenu: boolean
  openCollapse: boolean
}

export const ArrowIcon = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ openMenu, openCollapse, ...other }: Props & Omit<SvgIconProps, keyof Props>) => (
    <ExpandMore {...other} />
  )
)(({ theme, openMenu, openCollapse }: Props & { theme: Theme }) => ({
  position: 'absolute',
  right: 0,
  transform:
    openMenu && openCollapse
      ? 'translateX(-8px) scaleY(-1) '
      : openMenu
      ? 'translateX(-8px)'
      : 'scale(0.6) translateX(6px)',
  transition: theme.transitions.create(['transform', 'rigth'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}))
