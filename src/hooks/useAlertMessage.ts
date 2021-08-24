import { useSnackbar } from 'notistack';

export const useAlertMessage = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    default: (message: string) => enqueueSnackbar(message, { variant: 'default' }),
    success: (message: string) => enqueueSnackbar(message, { variant: 'success' }),
    warning: (message: string) => enqueueSnackbar(message, { variant: 'warning' }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error' }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info' }),
  };
};