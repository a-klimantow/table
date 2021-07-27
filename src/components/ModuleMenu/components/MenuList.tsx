import { useMenuContext } from './MenuProvider'
import { MenuListItem } from './MenuListItem'
import { SubmenuList } from './SubmenuList'

export const MenuList = () => {
  const { items } = useMenuContext()
  return (
    <>
      {items.map((item, idx) => {
        const { name, submenu } = item
        if (submenu) return <SubmenuList key={name} index={idx} {...item} />
        return <MenuListItem key={name} {...item} />
      })}
    </>
  )
}
