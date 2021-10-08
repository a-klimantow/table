import { useMenuContext } from './context'

export const MenuList = () => {
  const { pageMenus } = useMenuContext()
  return (
    <div>
      {pageMenus.map((item, i) => {
        return <div key={i}>i</div>
      })}
    </div>
  )
}
