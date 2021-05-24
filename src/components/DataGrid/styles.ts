import { makeStyles } from '@material-ui/core'

const HEAD_HEIGHT = 40

export const useGridStyles = makeStyles((theme) => ({
  grid: {
    maxHeight: 'calc(44px * 16)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 8,
      height: 8,
      position: 'absolute',
      left: 0,
    },

    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey['50'],
    },

    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.grey['500'],
      borderRadius: 30,
      border: '2px solid',
      borderColor: theme.palette.grey['50'],
      width: 100,
    },
  },

  head: {
    display: 'flex',
    minWidth: 'max-content',
    position: 'sticky',
    background: theme.palette.grey['500'],
    top: 0,
    zIndex: 2,
  },

  cell: {
    padding: theme.spacing(1),
    display: 'flex',
    position: 'relative',
    background: 'inherit',

    '& > span': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      marginRight: 'auto',
    },

    '&[data-head]': {
      minHeight: HEAD_HEIGHT,
      alignItems: 'center',
      overflow: 'hidden',
    },

    '&[data-cell]': {
      '&::after': {
        content: '""',
        position: 'absolute',
        right: 1,
        top: theme.spacing(1),
        bottom: theme.spacing(1),
        borderRight: '1px solid',
        borderRightColor: theme.palette.divider,
      },
    },

    '&[data-freeze]': {
      position: 'sticky',
      zIndex: 1,
      '&:nth-child(1)': {
        left: 0,
      },
      '&:nth-child(2)': {
        left: 50,
      },
      '&:nth-child(3)': {
        left: 100,
      },
    },

    '&:is(&[data-checkbox],&[data-menu])': {
      padding: theme.spacing(0, 0.5),
      position: 'sticky',
      zIndex: 1,
      display: 'inline-grid',
      placeContent: 'center',
    },

    '&[data-menu] > button': {
      width: 42,
      height: 42,
    },
  },

  row: {
    display: 'flex',
    minWidth: 'max-content',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
    background: theme.palette.common.white,
  },

  resize: {
    position: 'absolute',
    right: 0,
    transform: 'translateX(40%) rotate(90deg)',
    cursor: 'col-resize',
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  },
}))
