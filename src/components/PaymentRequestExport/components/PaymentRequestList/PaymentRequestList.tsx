import { useStyles } from '../../style'
import { useState } from 'react'

import { WrapperRadio } from '../ListWrapper/WrapperRadio'
import { WrapperCheckbox } from '../ListWrapper/WrapperCheckbox'

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

export const PaymentRequestList = () => {
  const classes = useStyles()

  const [payment, setPayment] = useState('webmoney')
  const [status, setStatus] = useState('new')

  const handlePaymentSystemChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPayment(event.currentTarget.value)
  }

  const handlePaymentStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <>
      <WrapperRadio
        title={'Платежная система'}
        radioList={availablePaymentSystems}
        onChange={handlePaymentSystemChange}
        value={payment}
        className={classes.root}
      />
      <WrapperRadio
        title={'Статус заявки'}
        radioList={paymentStatus}
        onChange={handlePaymentStatusChange}
        value={status}
        className={classes.root}
      />

      <WrapperCheckbox
        title={'Панели'}
        checkboxList={availablePanels}
        className={classes.root}
        //onChange=""
        //value={}
      />
    </>
  )
}