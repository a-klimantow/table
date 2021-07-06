import { FC, Children } from 'react'
import { Paper, makeStyles, createStyles } from '@material-ui/core'

export const TableWrapper: FC = ({ children }) => {
  const classes = useStyles({ count: Children.count(children) })

  return (
    <Paper classes={classes} elevation={0}>
      {children}
    </Paper>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: ({ count }: { count: number }) => ({
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateRows: count > 3 ? 'auto auto 1fr auto' : 'auto 1fr auto',
      maxHeight: 'calc(100vh - 120px)',
    }),
  })
)
