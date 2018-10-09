import React, { Component } from 'react'
import localized from '../lang'

class UserForm extends Component {
  render() {
    return (
      <div>
        {localized('username')}:
        <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
