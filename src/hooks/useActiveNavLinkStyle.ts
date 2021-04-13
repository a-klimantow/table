import { makeStyles } from '@material-ui/core'

export const useActiveNavLinkStyle = makeStyles((t) => ({
  active: {
    color: t.palette.primary.main,
    '& :first-child': {
      color: 'inherit',
    },
  },
}))
