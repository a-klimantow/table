import { makeAutoObservable, action } from 'mobx'
import { ButtonProps, DrawerProps } from '@material-ui/core'

export class ExportStore {
  isOpen = false
  system = ''
  status = ''
  panelIds: number[] = []

  constructor(public disabledPanels = true) {
    makeAutoObservable(this, {}, { proxy: false })
  }

  get btnDrawer(): ButtonProps {
    return {
      onClick: action('open', () => (this.isOpen = true)),
    }
  }

  get drawer(): DrawerProps {
    return {
      anchor: 'right',
      open: this.isOpen,
      onClose: action('close', () => (this.isOpen = false)),
    }
  }
}
