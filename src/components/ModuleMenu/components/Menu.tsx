import { FC } from 'react'
import { makeStyles, Typography, ListItem, ListItemIcon } from '@material-ui/core'
import { Menu as MenuIcon, CloseOutlined as CloseIcon } from '@material-ui/icons'

interface Props {
  openMenu: boolean
  menuName: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    '& > ul:first-of-type': {
      paddingTop: theme.spacing(4),
    },
  },
  base: {
    display: ({ openMenu }: Pick<Props, 'openMenu'>) => (openMenu ? 'block' : 'none'),
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    background: theme.palette.background.paper,
    overflow: 'hidden',
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100%',
    width: ({ openMenu }: Pick<Props, 'openMenu'>) => (openMenu ? 300 : '100%'),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    textTransform: 'uppercase',
  },
}))

export const Menu: FC<Props & { onClick: () => void }> = ({
  children,
  menuName,
  openMenu,
  onClick,
}) => {
  const classes = useStyles({ openMenu })
  return (
    <nav className={classes.root}>
      <div className={classes.base} onClick={openMenu ? onClick : undefined} />
      <ul className={classes.menu}>
        <li>
          <ListItem button onClick={onClick}>
            <ListItemIcon>{openMenu ? <CloseIcon /> : <MenuIcon />}</ListItemIcon>
            <Typography>{menuName}</Typography>
          </ListItem>
        </li>
        {children}
      </ul>
    </nav>
  )
}
