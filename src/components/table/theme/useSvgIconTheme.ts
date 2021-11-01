import { ThemeHookType as H } from '../types'

export const useSvgIconTheme: H<'MuiSvgIcon'> = () => ({
  defaultProps: {
    fontSize: 'inherit',
  },
})
