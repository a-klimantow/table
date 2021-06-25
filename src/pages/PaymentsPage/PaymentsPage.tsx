import { useState, FC } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'

import { IPaymentsPage } from './types'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'

import Checkbox from '@material-ui/core/Checkbox'

import { DivWrap, SpaceBottom } from './styles'
import { Layout } from 'components'

const Test = () => <div>test</div>

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 700, renderHeader: Test },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

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

export const PaymentsPage: FC<IPaymentsPage> = ({ panels, paymentSystems }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [payment, setPayment] = useState('webmoney')
  const [status, setStatus] = useState('new')

  const handleDrawer = () => setOpen((state) => !state)

  const handlePaymentSystemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((event.target as HTMLInputElement).value)
  }

  const handlePaymentStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value)
  }

  return (
    <Layout.Page>
      <div style={{ backgroundColor: 'white' }}>
        <DataGrid
          classes={classes}
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          components={{ Toolbar: Test, Pagination: Test }}
          componentsProps={{ toolbar: { test: 1 } }}
        />

        <SwipeableDrawer anchor={'right'} open={open} onClose={handleDrawer} onOpen={handleDrawer}>
          <DivWrap>
            <div>
              <Typography variant="h5">Экспорт заявок</Typography>
              <SpaceBottom></SpaceBottom>

              <FormControl component="fieldset">
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
          </DivWrap>
        </SwipeableDrawer>
        <Button onClick={handleDrawer}>Open</Button>
      </div>
    </Layout.Page>
  )
}

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    '& .MuiDataGrid': {
      '&-cell:first-child': {
        position: 'absolute',
        left: 0,
        border: '1px solid',
      },
      '&-cell:not(:first-child)': {
        color: 'blue',
        marginLeft: 48,
      },
    },
  },
})
