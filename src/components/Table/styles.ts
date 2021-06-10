import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(({ palette, spacing, overrides }) =>
  createStyles({
    root: {
      maxHeight: 400,
      overflow: 'auto',
      position: 'sticky',
    },
    table: {
      borderSpacing: 0,
      width: '100%',
      minWidth: 'max-content',
    },

    row: {
      backgroundColor: palette.background.paper,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: palette.divider,
    },

    header: {
      position: 'sticky',
      top: 0,
      background: palette.grey['100'],
      zIndex: 2,
      height: 56,
      whiteSpace: 'nowrap',
    },

    cell: {
      fontSize: 14,
      lineHeight: '1.15em',
      padding: spacing(0, 1),
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      background: 'inherit',
      border: 'inherit',

      '&[data-freeze]': {
        position: 'sticky',
        left: 0,
        '&:nth-child(2)': {
          left: 50,
        },
        '&:nth-child(3)': {
          left: 100,
        },
      },

      '&[data-action]': {
        padding: spacing(0.5),
      },
    },

    icon: {
      padding: 0,
      width: 50,
      textAlign: 'center',
    },
  })
)
