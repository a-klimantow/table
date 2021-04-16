import { useMemo } from 'react'
import {
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'
import { IModuleMenuItem } from 'components'

export const useModuleMenu = (path: string): IModuleMenuItem[] =>
  useMemo(() => {
    switch (path) {
      case '/rewards':
        return [
          { name: 'Выплаты', to: `${path}/payloads`, icon: MinusIcon },
          { name: 'Начисления', to: `${path}/profit`, icon: PlusIcon },
        ]

      default:
        return []
    }
  }, [path])
