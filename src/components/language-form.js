import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer as LanguageConsumer } from '../contexts/language'

import { LANGUAGES } from '../constants'

class LanguageForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange } = this.props
    return (
      <LanguageConsumer>
        {(current) => {
          function style(lang) {
            return current === lang ? { color: 'red' } : null
          }

          return Object.values(LANGUAGES).map((lang) => (
            <button
              onClick={() => onChange(lang)}
              style={style(lang)}
              key={lang}
            >
              {lang}
            </button>
          ))
        }}
      </LanguageConsumer>
    )
  }
}

export default LanguageForm
