import * as React from 'react'
import * as Mui from '@mui/material'
import { blue } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    blue: Mui.Color
  }

  interface PaletteOptions {
    blue: Mui.Color
  }
}

type T = Mui.Theme
type P = Mui.PaletteOptions

export const usePallete = (theme: T): P =>
  React.useMemo(() => ({ ...theme.palette, blue }), [theme])
