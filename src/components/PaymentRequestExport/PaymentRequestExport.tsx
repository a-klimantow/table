import { FC } from 'react'

import { Typography, Button, Box } from '@material-ui/core'

import { useStyles, Wrapper } from './style'
import { IPaymentRequestClose } from './types'

import { PaymentRequestList } from './components/PaymentRequestList'

export const PaymentRequestExport: FC<IPaymentRequestClose> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <>
      <Wrapper>
        <Typography variant="h5" className={classes.root}>
          Экспорт заявок
        </Typography>
        <PaymentRequestList />
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
