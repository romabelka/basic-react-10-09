import React, { Component } from 'react'
import MenuItem from './menu-item'
import { LocalizationLanguage } from '../../contexts/localization'

class Menu extends Component {
  render() {
    return (
      <div>
        <LocalizationLanguage.Consumer>
          {(language) => <h3>{language.menuTitle}</h3>}
        </LocalizationLanguage.Consumer>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
