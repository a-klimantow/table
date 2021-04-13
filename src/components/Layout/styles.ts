import { makeStyles } from '@material-ui/core'

const MIN_WIDTH = 54
const MAX_WIDTH = 300

export const useStyles = makeStyles((t) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: `${MIN_WIDTH}px 1fr`,
  },
  list: {
    width: MIN_WIDTH,
    overflow: 'hidden',
    height: 'calc(100vh - 54px)',
    background: t.palette.background.paper,
    borderRight: `1px solid ${t.palette.divider}`,
    transition: t.transitions.create('width', {
      easing: t.transitions.easing.easeInOut,
      duration: t.transitions.duration.enteringScreen,
    }),
  },
  listOpen: {
    width: MAX_WIDTH,
  },
  base: {
    position: 'fixed',
  },
  baseOpen: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}))
