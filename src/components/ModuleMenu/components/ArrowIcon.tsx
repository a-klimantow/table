import { observer } from 'mobx-react-lite'
import { KeyboardArrowDownSharp } from '@material-ui/icons'

type ArrowIconProps = {
  isSubmenuOpen?: boolean
  isMenuOpen?: boolean
}
export const ArrowIcon = observer<ArrowIconProps>(({ isSubmenuOpen, isMenuOpen }) => (
  <KeyboardArrowDownSharp
    sx={{
      position: 'absolute',
      right: 7,
      transform: 'translateX(50%) scale(0.7)',
      transition: 'transform .3s ease',
      ...(isMenuOpen && {
        transform: 'translateX(0) scale(1)',
      }),

      ...(isSubmenuOpen && {
        transform: 'translateX(0) scale(1) rotate(180deg)',
      }),
    }}
  />
))
