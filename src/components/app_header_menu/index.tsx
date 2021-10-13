import {
  useMenu,
  useModuleButtonName,
  useModuleMenuItems,
  useUserButtonName,
  useUserMenuItems,
} from './hooks'
import { UserButton, ModuleButton, Menu, Item } from './atoms'

export const UserMenu = () => {
  const { button, menu } = useMenu()
  const userName = useUserButtonName()
  const items = useUserMenuItems()
  return (
    <>
      <UserButton {...button}>{userName}</UserButton>
      <Menu {...menu}>
        {items.map((item) => (
          <Item key={item.link} {...item} />
        ))}
      </Menu>
    </>
  )
}

export const ModuleMenu = () => {
  const { button, menu } = useMenu()
  const moduleName = useModuleButtonName()
  const items = useModuleMenuItems()
  return (
    <>
      <ModuleButton {...button}>{moduleName}</ModuleButton>
      <Menu {...menu}>
        {items.map((item) => (
          <Item key={item.link} {...item} />
        ))}
      </Menu>
    </>
  )
}
