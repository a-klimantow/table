import React from 'react'
import { SnackbarProvider as Provider } from 'notistack'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import { useStyles } from './style'

export const SnackbarProvider: React.FC = ({ children }) => (
  <Provider
    maxSnack={2}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    iconVariant={
      {
        // success: <CheckCircleOutlinedIcon className={classes.icon}/>,
        // error: <ErrorOutlineRoundedIcon className={classes.icon}/>,
        // warning: <ReportProblemOutlinedIcon className={classes.icon}/>,
        // info: <ErrorOutlineRoundedIcon className={classes.icon}/>,
      }
    }
  >
    {children}
  </Provider>
)
