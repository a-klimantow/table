import { styled } from '@material-ui/core'

export const Resize = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  padding: theme.spacing(1, 0.5),
  cursor: 'col-resize',

  '&::after': {
    content: '""',
    border: '1px solid',
    borderColor: theme.palette.grey['400'],
    height: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  '&:hover::after': {
    borderColor: 'initial',
  },
}))
