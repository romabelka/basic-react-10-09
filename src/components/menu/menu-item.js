import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Consumer as LanguageConsumer } from '../../contexts/glossary'

class MenuItem extends Component {
  render() {
    const { children, path } = this.props
    return (
      <div>
        <NavLink to={path} activeStyle={{ color: 'red' }}>
          <LanguageConsumer>
            {(glossary) => glossary[children]}
          </LanguageConsumer>
        </NavLink>
      </div>
    )
  }
}

export default MenuItem
