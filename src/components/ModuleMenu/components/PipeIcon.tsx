import { ListItemIcon, styled } from '@material-ui/core'

// export const PipeIcon = styled('div')({
//   width: 24,
//   height: 24,
//   position: 'relative',

//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     height: '100%',
//     border: '1px solid',
//   },
// })

export const PipeIcon = styled(ListItemIcon)({
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: 12,
    height: 30,
    transform: 'translateY(-50%)',
    borderLeft: '1px solid',
  },
})
