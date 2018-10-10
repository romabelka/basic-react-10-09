import React, { Component } from 'react'
import { Consumer as LocalConsumer } from '../contexts/local'

class UserForm extends Component {
  render() {
    const { value, localValue } = this.props

    return (
      <LocalConsumer>
        {(local) => (
          <div>
            {local.username}:
            <input value={value} onChange={this.handleUserChange} />
            {local.selectLanguage}:
            <select value={localValue} onChange={this.handleLocalChange}>
              <option value="en">{local.english}</option>
              <option value="ru">{local.russian}</option>
            </select>
          </div>
        )}
      </LocalConsumer>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }

  handleLocalChange = (ev) => {
    this.props.onLocalChange(ev.target.value)
  }
}

export default UserForm
