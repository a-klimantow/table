import {
  styled,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'

export const GridContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 400,

  '&[data-scroll] [data-freeze]::after': {
    content: "''",
    position: 'absolute',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.divider,
    top: 0,
    bottom: 0,
    right: 0,
  },
}))

export const Grid = styled(Table)({
  borderCollapse: 'separate',
  width: 'max-content',
  whiteSpace: 'nowrap',

  '& [data-freeze]': {
    position: 'sticky',
    left: 0,
    zIndex: 1,

    '&:nth-child(2)': {
      left: 50,
    },
    '&:nth-child(3)': {
      left: 100,
    },
  },
})

export const GridRowHead = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey['100'],
  position: 'sticky',
  top: 0,
  zIndex: 2,
}))

export const GridRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

export const GridCell = styled(TableCell)({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'inherit',
  textOverflow: 'ellipsis',
})

export const GridActionCell = styled(TableCell)({
  padding: 0,
  minWidth: 50,
  textAlign: 'center',
  backgroundColor: 'inherit',
  '&::after': {
    display: 'none',
  },

  '& button': {
    width: 42,
    height: 42,
  },
})

export const GridSortLabel = styled(TableSortLabel)({
  position: 'absolute',
  top: 8,
  left: '50%',
  transform: 'scale(.75)',
})

export const Resize = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 2,
  top: 0,
  bottom: 0,
  width: 4,
  display: 'flex',
  cursor: 'col-resize',

  '&::before': {
    content: "''",
    height: 16,
    margin: 'auto',
    border: '1px solid',
    borderColor: theme.palette.grey['500'],
  },

  '&:hover::before': {
    borderColor: 'initial',
  },
}))
