import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: 'red' }}>
              counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/comments" activeStyle={{ color: 'red' }}>
              comments
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route
            path="/articles/new"
            render={() => <h1>New Article Page</h1>}
          />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/comments" component={CommentsPage} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
