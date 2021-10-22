import * as React from 'react'
import * as Mui from '@mui/material'
//
import { paymentNames } from 'assets'
import * as Btn from '../buttons'
import { useMenu, useActivePay, useFromData } from './hooks'

export const Button = Btn.Import

export const ImportMenu: React.FC = ({ children }) => {
  const [anchor, setAnchor] = useMenu()
  return (
    <>
      <Btn.Import onClick={(e) => setAnchor(e.currentTarget)} />
      <Mui.Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
      >
        {children}
      </Mui.Menu>
    </>
  )
}

type ItemsProps = {
  activePay: ReturnType<typeof useActivePay>
  formData: ReturnType<typeof useFromData>
}

type E = React.ChangeEvent<HTMLInputElement>

const items = ['yookassa', 'webmoney'] as const

export const Items: React.FC<ItemsProps> = ({
  formData: [, setData],
  activePay: [, setPay],
}) => {
  const handleChange = (name: string) => (e: E) => {
    const { files } = e.currentTarget
    if (files?.length) {
      const [file] = files
      const data = new FormData()
      data.set(file.name, file)
      setData(data)
      setPay(name)
    }
  }
  return (
    <React.Fragment>
      {items.map((item) => (
        <Mui.MenuItem key={item} sx={{ padding: 0 }}>
          <Mui.Typography component="label" sx={{ py: 1, px: 2 }}>
            {paymentNames.get(item)}
            <input type="file" hidden onChange={handleChange(item)} />
          </Mui.Typography>
        </Mui.MenuItem>
      ))}
    </React.Fragment>
  )
}
