import { ThemeHookType as H } from '../types'

export const useSwitchTheme: H<'MuiSwitch'> = () => ({
  defaultProps: { size: 'small' },
})
