import { FC } from 'react'
import { styled } from '@material-ui/core'

import { useHandleResize } from '../../hooks'

export const Resize: FC<{ isResize?: boolean }> = ({ isResize = true }) => {
  const handleResize = useHandleResize()

  return (
    <ResizeStyle
      onMouseDown={isResize ? handleResize('down') : undefined}
      onMouseUp={handleResize('up')}
      onMouseMove={handleResize('move')}
      data-is-resize={isResize ? '' : null}
    />
  )
}

export const ResizeStyle = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  padding: theme.spacing(1, 0.5),

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

  '&[data-is-resize]': {
    cursor: 'col-resize',
    '&:hover::after': {
      borderColor: 'initial',
    },
  },

  '&[data-resized]': {
    '&::before': {
      content: "''",
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    },
  },
}))
