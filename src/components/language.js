import React, { Component } from 'react'
import { LocalizationLanguage, localization } from '../contexts/localization'

export class Language extends Component {
  changeLanguage = (e) => {
    const { id } = e.currentTarget
    this.props.handler(localization[id])
  }
  render() {
    return (
      <LocalizationLanguage.Consumer>
        {(language) => (
          <div>
            <button id="en" onClick={this.changeLanguage}>
              {language.buttonLangEn}
            </button>
            <button id="ru" onClick={this.changeLanguage}>
              {language.buttonLangRu}
            </button>
          </div>
        )}
      </LocalizationLanguage.Consumer>
    )
  }
}

export default Language
