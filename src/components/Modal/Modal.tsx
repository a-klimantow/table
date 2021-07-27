import { FC } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

interface IModalProps {
  open: boolean
  onClose: () => void
  type?: 'info' | 'error' | 'confirm'
  title: string
  innerText: string
  onYesClick?: () => void
}

export const Modal: FC<IModalProps> = ({
  open,
  onClose,
  title,
  innerText,
  type = 'info',
  onYesClick,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          color: type === 'error' ? 'error.main' : 'primary.main',
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{innerText}</DialogContentText>
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
  )
}
