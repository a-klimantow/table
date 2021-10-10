import { PageType as P, ModuleType as M } from 'types'
import { icon, name } from 'assets'

const rewards = {
  name: name('rewards'),
  items: [
    {
      name: name('rewards_submenu'),
      icon: icon('rewards'),
      items: [
        { name: name('requests'), link: 'requests' as P },
        { name: name('reports'), link: 'reports' as P },
      ],
    },
    { name: name('accruals'), link: 'accruals' as P },
  ],
} 

export const menus = { rewards }
