import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Consumer as LocalConsumer } from '../../contexts/local'

class MenuItem extends Component {
  render() {
    const { children, path } = this.props
    return (
      <div>
        <NavLink to={path} activeStyle={{ color: 'red' }}>
          <LocalConsumer>{(local) => local[children]}</LocalConsumer>
        </NavLink>
      </div>
    )
  }
}

export default MenuItem
