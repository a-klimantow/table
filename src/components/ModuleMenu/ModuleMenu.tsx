import { Route } from 'react-router-dom'

import { MenuItem, Provider } from './atoms'
import { useRewardsMenu } from './useRewardsMenu'

export const ModuleMenu = () => {
  const rewardsMenu = useRewardsMenu()
  return (
    <Route path="/rewards/">
      <Provider>
        {rewardsMenu.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Provider>
    </Route>
  )
}
