import { makeStyles } from '@material-ui/core'

const MAX_WIDTH = 240

export const useStyles = makeStyles((t) => ({
  base: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  baseOpen: {
    display: 'block',
  },
  menu: {
    paddingTop: t.spacing(4),
    background: t.palette.background.paper,
    overflow: 'hidden',
    borderRight: `1px solid ${t.palette.divider}`,
    height: '100%',
    width: '100%',
    transition: t.transitions.create('width', {
      easing: t.transitions.easing.easeInOut,
      duration: t.transitions.duration.enteringScreen,
    }),
    textTransform: 'uppercase',
  },
  menuOpen: {
    width: MAX_WIDTH,
  },

  item: {
    '& > a': {
      display: 'contents',
    },

    '& a.active *': {
      color: t.palette.primary.main,
    },
  },
  icon: {
    position: 'absolute',
    right: 0,
    transform: 'translateX(-8px)',
    transition: t.transitions.create(['transform', 'rigth'], {
      easing: t.transitions.easing.easeInOut,
      duration: t.transitions.duration.enteringScreen,
    }),
  },

  iconRotate: {
    position: 'absolute',
    transform: 'translateX(-8px) rotate(180deg) ',
  },

  iconSmall: {
    transform: 'scale(.8) translateX(4px)',
  },
}))
