import { useState } from 'react'
import { SwipeableDrawer, Box, Button, CircularProgress } from '@material-ui/core'

import { PaymentRequestExport } from '../../components/PaymentRequestExport'
import { Modal } from '../../components/Modal'

const text =
  'Et. Libero, platea risus sed ultricies. Arcu quis, venenatis risus venenatis adipiscing justo sed lectus eleifend '

export const PaymentsPage = () => {
  const [open, setOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const [start, startSmth] = useState(false)

  const handleToggleDrawer = () => setOpen((state) => !state)

  const handleCloseDrawer = () => setOpen(false)

  const handleToggleModal = () => setOpenModal((state) => !state)

  const handleCloseModal = () => {
    setOpenModal(false)
    startSmth(false)
  }

  const handleStartSmth = () => startSmth(true)

  return (
    <>
      {start ? <CircularProgress /> : null}
      <SwipeableDrawer
        anchor={'right'}
        open={open}
        onClose={handleToggleDrawer}
        onOpen={handleToggleDrawer}
      >
        <PaymentRequestExport onClick={handleCloseDrawer} />
      </SwipeableDrawer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        title={'Заголовок'}
        innerText={text}
        type={'confirm'}
        onYesClick={handleStartSmth}
      />
      <Box component="span" m={1}>
        <Button color="primary" onClick={handleToggleDrawer}>
          Экспорт
        </Button>
        <Button color="primary" onClick={handleToggleModal}>
          Открыть
        </Button>
      </Box>
    </>
  )
}
