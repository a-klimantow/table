import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header, Layout } from '../components'

export const App: FC = () => (
  <>
    <Header />
    <Layout>
      <Switch>
        <Route
          path="/"
          render={() => (
            <select style={{ placeSelf: 'center' }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          )}
          exact
        />
        <Route path="/projects" render={() => <div>Проекты</div>} />
        <Route path="/panels" render={() => <div>Панели</div>} />
        <Route path="/payments" render={() => <div>Вознаграждения</div>} />
        <Route path="/admin" render={() => <div>Администрирование</div>} />
        <Route path="/settings" render={() => <div>Настройка почты</div>} />
        <Route path="/logout" render={() => <div>Выход</div>} />
      </Switch>
    </Layout>
  </>
)
