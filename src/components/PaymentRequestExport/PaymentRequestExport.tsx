import { useState, FC } from 'react'

import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Button,
  Box,
} from '@material-ui/core'

import { useStyles, Wrapper } from './style'
import { IPaymentRequestClose } from './types'

import { PaymentRequestList } from './PaymentRequestList'

const availablePanels = [
  { id: 1029695, key: 'em', title: 'Экспертное мнение' },
  { id: 161373312, key: 'opby', title: 'Opros.by' },
  { id: 183597234, key: 'oy', title: 'Oy.kz' },
  { id: 74340367, key: 'vd', title: 'Власна думка' },
  { id: 7110218, key: 'bp', title: 'BigPoll' },
]

const availablePaymentSystems = [
  { id: 11, key: 'youkassa', title: 'Юкасса' },
  { id: 12, key: 'webmoney', title: 'Webmoney' },
]

const paymentStatus = [
  { id: 11, key: 'new', title: 'Новые' },
  { id: 12, key: 'inProgress', title: 'В процессе' },
]

export const PaymentRequestExport: FC<IPaymentRequestClose> = ({ onClick }) => {
  const classes = useStyles()

  const [payment, setPayment] = useState('webmoney')
  const [status, setStatus] = useState('new')

  const handlePaymentSystemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(event.currentTarget.value)
  }

  const handlePaymentStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <>
      <Wrapper>
        <Typography variant="h5" className={classes.root}>
          Экспорт заявок
        </Typography>
        <PaymentRequestList></PaymentRequestList>
      </Wrapper>
      <Box className={classes.box}>
        <Button variant="outlined" color="primary" className={classes.margin} onClick={onClick}>
          Отменить
        </Button>
        <Button variant="contained" color="primary">
          Экспортировать
        </Button>
      </Box>
    </>
  )
}
