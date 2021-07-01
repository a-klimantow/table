import { useState, FC } from 'react'
import { Typography } from '@material-ui/core'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import { Wrapper, SpaceBottom } from './style'

export const PaymentRequestExport = () => {
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

  const [payment, setPayment] = useState('webmoney')
  const [status, setStatus] = useState('new')

  const handlePaymentSystemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((event.target as HTMLInputElement).value)
  }

  const handlePaymentStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value)
  }

  return (
    <Wrapper>
      <div>
        <Typography variant="h5">Экспорт заявок</Typography>
        <SpaceBottom></SpaceBottom>

        <FormControl component="fieldset" className={classes.root}>
          <FormLabel component="legend">
            <Typography variant="body1">Платежная система</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="payment"
            name="payment"
            value={payment}
            onChange={handlePaymentSystemChange}
          >
            {availablePaymentSystems.map((system) => (
              <FormControlLabel
                key={system['key']}
                value={system.key}
                control={<Radio />}
                label={system.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <SpaceBottom></SpaceBottom>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="body1">Статус заявки</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="request"
            name="request"
            value={status}
            onChange={handlePaymentStatusChange}
          >
            {paymentStatus.map((status) => (
              <FormControlLabel
                key={status['key']}
                value={status.key}
                control={<Radio />}
                label={status.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <SpaceBottom></SpaceBottom>

        <FormControl component="fieldset" className="">
          <FormLabel component="legend">
            {' '}
            <Typography variant="body1">Панели</Typography>
          </FormLabel>
          <FormGroup>
            {availablePanels.map((panel) => (
              <FormControlLabel
                key={panel['key']}
                control={
                  <Checkbox
                    //checked={true}
                    //onChange={handleChange}
                    name={panel.key}
                  />
                }
                label={panel.title}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </Wrapper>
  )
}
