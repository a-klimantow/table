import { useState, FC } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'

import { IPaymentsPage } from './types'

import { PaymentRequestExport } from '../../components/PaymentRequestExport'

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

export const PaymentsPage: FC<IPaymentsPage> = ({ panels, paymentSystems }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleDrawer = () => setOpen((state) => !state)

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
          <PaymentRequestExport />
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
