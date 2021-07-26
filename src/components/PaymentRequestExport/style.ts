import { styled } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 4),
  width: 400,
  height: '100%',
}))

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  box: {
    padding: theme.spacing(3, 4),
    alignContent: 'flex-end',
  },
  margin: {
    marginRight: theme.spacing(2),
  },
}))
