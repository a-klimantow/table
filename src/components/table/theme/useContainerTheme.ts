import { ThemeHookType as H } from '../types'

export const useContainerTheme: H<'MuiContainer'> = (theme) => ({
  defaultProps: { disableGutters: true },
  styleOverrides: {
    root: {
      width: 'auto',
      border: '1px solid',
      borderColor: theme?.palette.divider,
      borderRadius: theme?.shape.borderRadius,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
})
