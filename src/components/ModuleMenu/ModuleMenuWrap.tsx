import { observer } from 'mobx-react-lite'
import { Box } from '@material-ui/core'

interface MenuWrapProps {
  isOpen: boolean
  onClose(): void
}

export const ModuleMenuWrap = observer<MenuWrapProps>(({ children, isOpen, onClose }) => {
  return (
    <Box
      component="nav"
      sx={{
        py: 2,
        backgroundColor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        minWidth: isOpen ? '222px' : '100%',
        transition: 'min-width 0.3s ease',
        zIndex: 'drawer',

        '& > .base': {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: isOpen ? 'block' : 'none',
        },
      }}
    >
      <div className="base" onClick={onClose} />
      {children}
    </Box>
  )
})
