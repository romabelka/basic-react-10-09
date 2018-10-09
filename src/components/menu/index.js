import React, { Component } from 'react'
import MenuItem from './menu-item'
import localized from '../../lang'

class Menu extends Component {
  render() {
    return (
      <div>
        <h3>{localized('mainMenu')}</h3>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
