import React from 'react';
import { SnackbarProvider } from 'notistack';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

export const Snackbar: React.FC = ({children}) => {
  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      iconVariant={{
        success: <CheckCircleOutlinedIcon/>,
        error: <ErrorOutlineRoundedIcon/>,
        warning: <ReportProblemOutlinedIcon/>,
        info: <ErrorOutlineRoundedIcon/>,
      }}
    >
      {children}
    </SnackbarProvider>
  )
}