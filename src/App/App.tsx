import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from '../components'

export const App: FC = () => (
  <>
    <Header />
    <div style={{ position: 'relative' }}>
      <Switch>
        <Route path="/" render={() => <div>home</div>} exact />
        <Route path="/projects" render={() => <div>Проекты</div>} />
        <Route path="/panels" render={() => <div>Панели</div>} />
        <Route path="/payments" render={() => <div>Вознаграждения</div>} />
        <Route path="/admin" render={() => <div>Администрирование</div>} />
        <Route path="/settings" render={() => <div>Настройка почты</div>} />
        <Route path="/logout" render={() => <div>Выход</div>} />
      </Switch>
    </div>
  </>
)
