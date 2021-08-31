import { useSnackbar } from 'notistack';
import { AlertCloseButton as action } from '../components/AlertCloseButton';


export const useAlertMessage = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    default: (message: string) => enqueueSnackbar(message, { variant: 'default', action }),
    success: (message: string) => enqueueSnackbar(message, { variant: 'success', action }),
    warning: (message: string) => enqueueSnackbar(message, { variant: 'warning', action }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error', action }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info', action }),
  };
};