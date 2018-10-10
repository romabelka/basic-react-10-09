import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './contexts/user'
import { LocalizationLanguage, localization } from './contexts/localization'
import Language from './components/language'

class App extends Component {
  state = {
    username: '',
    language: localization.en
  }

  handleUserChange = (username) => this.setState({ username })

  handlerLanguageChange = (language) => this.setState({ language })

  render() {
    return (
      <div>
        <LocalizationLanguage.Provider value={this.state.language}>
          <Language handler={this.handlerLanguageChange} />
          <UserForm
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <UserProvider value={this.state.username}>
            <Menu>
              <MenuItem path="/counter">
                <LocalizationLanguage.Consumer>
                  {(language) => <span>{language.menuCounterItem}</span>}
                </LocalizationLanguage.Consumer>
              </MenuItem>
              <MenuItem path="/filters">
                <LocalizationLanguage.Consumer>
                  {(language) => <span>{language.menuFiltersItem}</span>}
                </LocalizationLanguage.Consumer>
              </MenuItem>
              <MenuItem path="/articles">
                <LocalizationLanguage.Consumer>
                  {(language) => <span>{language.menuArticlesItem}</span>}
                </LocalizationLanguage.Consumer>
              </MenuItem>
              <MenuItem path="/comments">
                <LocalizationLanguage.Consumer>
                  {(language) => <span>{language.menuCommentsItem}</span>}
                </LocalizationLanguage.Consumer>
              </MenuItem>
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
        </LocalizationLanguage.Provider>
      </div>
    )
  }
}

export default App
