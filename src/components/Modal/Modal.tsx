import { FC } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

interface IModalProps {
  open: boolean
  onClose: () => void
  type: 'info' | 'error' | 'confirm'
  title: string
  innerText: string
  onYesClick?: () => void
}

const useStyles = makeStyles((theme) => ({
  errorText: { color: theme.palette.error.main },
  regularText: { color: theme.palette.primary.main },
}))

export const Modal: FC<IModalProps> = ({ open, onClose, title, innerText, type, onYesClick }) => {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className={type === 'error' ? classes.errorText : classes.regularText}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{innerText}</DialogContentText>
        </DialogContent>
        {type === 'confirm' ? (
          <DialogActions>
            <Button onClick={onYesClick} color="primary" variant="outlined">
              Да
            </Button>
            <Button onClick={onClose} color="primary" variant="contained" autoFocus>
              Нет
            </Button>
          </DialogActions>
        ) : type === 'info' || 'error' ? (
          <DialogActions>
            <Button onClick={onClose} color="primary" variant="outlined" autoFocus>
              Ок
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  )
}
