import { FC } from 'react'
import { makeStyles } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

interface Props {
  openMenu: boolean
  openCollapse: boolean
}

const useStyles = makeStyles((theme) => ({
  icon: {
    position: 'absolute',
    right: 0,
    transform: ({ openMenu, openCollapse }: Props) =>
      openMenu && openCollapse
        ? 'translateX(-8px) scaleY(-1) '
        : openMenu
        ? 'translateX(-8px)'
        : 'scale(0.6) translateX(6px)',
    transition: theme.transitions.create(['transform', 'rigth'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

export const ArrowIcon: FC<Props> = (props) => {
  const classes = useStyles(props)
  return <ExpandMore className={classes.icon} />
}
