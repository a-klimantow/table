import { styled } from '@material-ui/core'

export const Resize = styled('span')(({ theme }) => ({
  position: 'absolute',
  content: "'b'",
  width: 2,
  height: 20,
  top: '50%',
  right: 2,
  transform: 'translateY(-50%)',
  background: theme.palette.grey['300'],
  cursor: 'col-resize',
  '&:hover': {
    background: theme.palette.grey['700'],
  },
}))

export const InnerCell = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  alignItems: 'center',
}))
