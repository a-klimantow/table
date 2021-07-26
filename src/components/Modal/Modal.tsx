import { FC } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

interface IModalProps {
  open: boolean
  onClose: () => void
  type: 'info' | 'error' | 'confirm'
  title: string
  innerText: string
  onYesClick?: () => void
}

export const Modal: FC<IModalProps> = ({ open, onClose, title, innerText, type, onYesClick }) => {
  console.log(type, 'type')
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{innerText}</DialogContentText>
        </DialogContent>
        {type === 'confirm' ? (
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Disagree
            </Button>
            <Button onClick={onYesClick} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        ) : type === 'info' || 'error' ? (
          <DialogActions>
            <Button onClick={onClose} color="primary" autoFocus>
              Ок
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  )
}
