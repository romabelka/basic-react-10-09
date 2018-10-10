import React, { Component } from 'react'
import { LocalizationLanguage } from '../contexts/localization'

class UserForm extends Component {
  render() {
    return (
      <LocalizationLanguage.Consumer>
        {(language) => (
          <div>
            {language.userNameLabel}
            <input value={this.props.value} onChange={this.handleUserChange} />
          </div>
        )}
      </LocalizationLanguage.Consumer>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
