import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useStyles } from './style';

export const AlertCloseButton = (key: number) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  return (
    <Button className={classes.root} onClick={() => closeSnackbar(key)}>
      <CloseRoundedIcon/>
    </Button>
  )
}