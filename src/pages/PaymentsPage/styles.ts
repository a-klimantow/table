import { styled, makeStyles } from '@material-ui/core'

export const DivWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(3, 4),
  width: 400,
  height: '100%',
}))

export const SpaceBottom = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}))

export const useStyles = makeStyles(() => ({}))
