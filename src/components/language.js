import React, { Component } from 'react'

class FormChangeLanguage extends Component {
  render() {
    console.log('pros', this.props)
    return (
      <div>
        <select onChange={this.handleLanguageChange}>
          <option value="en">{this.props.value.english}</option>
          <option value="ru">{this.props.value.russian}</option>
        </select>
      </div>
    )
  }

  handleLanguageChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default FormChangeLanguage
