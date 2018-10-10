import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './contexts/user'
import { Provider as LanguageProvider } from './contexts/language'
import LanguageForm from './components/language-form'
import localized from './lang'
import { LANGUAGES } from './constants'

class App extends Component {
  state = {
    username: '',
    lang: LANGUAGES.EN
  }

  handleUserChange = (username) => this.setState({ username })

  handleLangChange = (lang) => this.setState({ lang })

  render() {
    return (
      <div>
        <LanguageProvider value={this.state.lang}>
          <UserProvider value={this.state.username}>
            <LanguageForm onChange={this.handleLangChange} />
            <UserForm
              value={this.state.username}
              onChange={this.handleUserChange}
            />
            <Menu>
              <MenuItem path="/counter">{localized('counter')}</MenuItem>
              <MenuItem path="/filters">{localized('filters')}</MenuItem>
              <MenuItem path="/articles">{localized('articles')}</MenuItem>
              <MenuItem path="/comments">{localized('comments')}</MenuItem>
            </Menu>
            <Switch>
              <Redirect from="/" to="/articles" exact />
              <Route path="/counter" component={Counter} exact />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => <h1>{localized('newArticle')}</h1>}
              />
              <Route path="/articles" component={ArticlesPage} />
              <Route path="/comments" component={CommentsPage} />
              <Route
                path="/error"
                render={() => <h1>{localized('error')}</h1>}
              />
              <Route path="*" render={() => <h1>{localized('notFound')}</h1>} />
            </Switch>
          </UserProvider>
        </LanguageProvider>
      </div>
    )
  }
}

export default App
