import { styled, makeStyles } from '@material-ui/core'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(3, 4),
  width: 400,
  height: '100%',
}))

export const SpaceBottom = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}))

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
}))
