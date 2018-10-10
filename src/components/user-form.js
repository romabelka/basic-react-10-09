import React, { Component } from 'react'
import { Consumer as LanguageConsumer } from '../contexts/glossary'

class UserForm extends Component {
  render() {
    return (
      <div>
        <LanguageConsumer>{(glossary) => glossary.username}</LanguageConsumer>:
        <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
