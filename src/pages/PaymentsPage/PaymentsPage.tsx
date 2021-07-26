import { Layout, DataGrid } from 'components'
import { useState } from 'react'
import { SwipeableDrawer, Box, Button } from '@material-ui/core'

import { PaymentRequestExport } from '../../components/PaymentRequestExport'
import { Modal } from '../../components/Modal/Modal'

const text =
  'Et. Libero, platea risus sed ultricies. Arcu quis, venenatis risus venenatis adipiscing justo sed lectus eleifend '

export const PaymentsPage = () => {
  const [open, setOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const handleToggleDrawer = () => setOpen((state) => !state)

  const handleCloseDrawer = () => setOpen(false)

  const handleToggleModal = () => setOpenModal((state) => !state)

  const handleCloseModal = () => setOpenModal(false)

  return (
    <Layout.Page>
      <DataGrid
        columns={[
          { name: 'test очень длинное название колонки', field: 'test' },
          { name: 'test 1 очень длинное название колонки', field: 'test1' },
          { name: 'test 2 очень длинное название колонки', field: 'test2' },
          { name: 'test 3 очень длинное название колонки', field: 'test3' },
          { name: 'test 4 очень длинное название колонки', field: 'test4' },
          { name: 'test 5 очень длинное название колонки', field: 'test5' },
          { name: 'test 6 очень длинное название колонки', field: 'test6' },
          { name: 'test 7 очень длинное название колонки', field: 'test7' },
        ]}
        data={Array(10).fill({ test: 0, test1: 1, test2: 2, test3: 3, test4: 4, test5: 5 })}
      />

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
        onYesClick={handleCloseModal}
      />
      <Box component="span" m={1}>
        <Button color="primary" onClick={handleToggleDrawer}>
          Экспорт
        </Button>
        <Button color="primary" onClick={handleToggleModal}>
          Открыть
        </Button>
      </Box>
    </Layout.Page>
  )
}
