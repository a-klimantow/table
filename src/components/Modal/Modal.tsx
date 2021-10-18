import { FC } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

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

      <DialogActions>
        {type === 'confirm' ? (
          <>
            <Button onClick={onYesClick} color="primary" variant="outlined">
              Да
            </Button>
            <Button onClick={onClose} color="primary" variant="contained" autoFocus>
              Нет
            </Button>
          </>
        ) : type === 'info' || 'error' ? (
          <Button onClick={onClose} color="primary" variant="outlined" autoFocus>
            Ок
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  )
}
