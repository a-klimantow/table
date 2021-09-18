import { Route } from 'react-router-dom'

import { MenuItem, Provider } from './atoms'
import { useRewardsMenu } from './useRewardsMenu'

export const ModuleMenu = () => {
  const rewardsMenu = useRewardsMenu()
  return (
    <Provider>
      <Route path="/rewards/">
        {rewardsMenu.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Route>
    </Provider>
  )
}
