import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export const AlertCloseButton = (key: number) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <Button onClick={() => closeSnackbar(key)} style={{color: 'inherit'}}>
      <CloseRoundedIcon/>
    </Button>
  )
}