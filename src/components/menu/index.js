import React, { Component } from 'react'
import MenuItem from './menu-item'
import { Consumer as LanguageConsumer } from '../../contexts/glossary'

class Menu extends Component {
  render() {
    return (
      <div>
        <LanguageConsumer>
          {(glossary) => <h3>{glossary.mainMenu}</h3>}
        </LanguageConsumer>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
