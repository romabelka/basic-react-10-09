import React, { Component } from 'react'
import MenuItem from './menu-item'
import { Consumer as LocalConsumer } from '../../contexts/local'

class Menu extends Component {
  render() {
    return (
      <div>
        <LocalConsumer>{(local) => <h3>{local.mainMenu}</h3>}</LocalConsumer>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
