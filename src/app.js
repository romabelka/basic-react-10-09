import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './contexts/user'
import { Provider as LocalProvider } from './contexts/local'
import localDictionary from './contexts/localDictionary'

class App extends Component {
  state = {
    username: '',
    local: 'en'
  }

  handleUserChange = (username) => this.setState({ username })

  handleLocalChange = (local) => this.setState({ local })

  render() {
    return (
      <div>
        <LocalProvider value={localDictionary[this.state.local]}>
          <UserForm
            value={this.state.username}
            onChange={this.handleUserChange}
            localValue={this.state.local}
            onLocalChange={this.handleLocalChange}
          />
          <UserProvider value={this.state.username}>
            <Menu>
              <MenuItem path="/counter">counter</MenuItem>
              <MenuItem path="/filters">filters</MenuItem>
              <MenuItem path="/articles">articles</MenuItem>
              <MenuItem path="/comments">comments</MenuItem>
            </Menu>
            <Switch>
              <Redirect from="/" to="/articles" exact />
              <Route path="/counter" component={Counter} exact />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => <h1>New Article Page</h1>}
              />
              <Route path="/articles" component={ArticlesPage} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/error" render={() => <h1>Error Page</h1>} />
              <Route path="*" render={() => <h1>Not Found Page</h1>} />
            </Switch>
          </UserProvider>
        </LocalProvider>
      </div>
    )
  }
}

export default App
