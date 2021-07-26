import { useEffect } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { Collapse, Typography } from '@material-ui/core'
import { KeyboardArrowDownSharp } from '@material-ui/icons'

import { ModuleMenuItemProps } from './types'
import { ItemStyled } from './styled'

export const ModuleSubmenu = observer<ModuleMenuItemProps>(
  ({ icon: Icon, name, submenu, onClick }) => {
    return (
      <>
        <ItemStyled onClick={onClick}>
          {Icon && <Icon />}
          <Typography variant="button">{name}</Typography>
        </ItemStyled>
        <Collapse in>
          {submenu?.map((item) => (
            <ItemStyled key={item.name}>
              <Typography component="span" sx={{ fontSize: 12 }}>
                {item.name}
              </Typography>
            </ItemStyled>
          ))}
        </Collapse>
      </>
    )
  }
)

type ArrowIconProps = {
  collapseOpen?: boolean
  menuOpen?: boolean
}
const ArrowIcon = observer<ArrowIconProps>(({ collapseOpen, menuOpen }) => (
  <KeyboardArrowDownSharp
    sx={{
      position: 'absolute',
      right: 7,
      transform: 'translateX(50%) scale(0.7)',
      transition: 'transform .3s ease',
      ...(menuOpen && {
        transform: 'translateX(0) scale(1)',
      }),

      ...(collapseOpen && {
        transform: 'translateX(0) scale(1) rotate(180deg)',
      }),
    }}
  />
))
