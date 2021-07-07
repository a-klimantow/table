import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'

import { useStyles } from './style'

export const PaymentRequestList = () => {
  const classes = useStyles()

  return (
    <>
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

      <FormControl component="fieldset" className={classes.root}>
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

      <FormControl component="fieldset" className={classes.root}>
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
    </>
  )
}
