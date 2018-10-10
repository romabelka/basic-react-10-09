import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import FormChangeLanguage from './components/language'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './contexts/user'
import { Provider as LanguageProvider, glossary } from './contexts/glossary'

class App extends Component {
  state = {
    username: '',
    language: glossary.en
  }

  handleUserChange = (username) => this.setState({ username })

  handleLanguageChange = () =>
    this.setState((state) => ({
      language: state.language === glossary.en ? glossary.ru : glossary.en
    }))

  render() {
    return (
      <div>
        <FormChangeLanguage
          value={this.state.language}
          onChange={this.handleLanguageChange}
        />
        <LanguageProvider value={this.state.language}>
          <UserForm
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <UserProvider value={this.state.username}>
            <Menu>
              <MenuItem path="/counter">Counter</MenuItem>
              <MenuItem path="/filters">Filters</MenuItem>
              <MenuItem path="/articles">Articles</MenuItem>
              <MenuItem path="/comments">Comments</MenuItem>
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
        </LanguageProvider>
      </div>
    )
  }
}

export default App
