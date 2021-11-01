import { ThemeHookType as H } from '../types'

export const usePopoverTheme: H<'MuiPopover'> = () => ({
  defaultProps: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  },
})
