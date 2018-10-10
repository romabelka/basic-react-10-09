import React from 'react'
import { LocalizationLanguage } from '../../contexts/localization'

function Loader() {
  return (
    <LocalizationLanguage.Consumer>
      {(language) => <h2>{language.loadingText}</h2>}
    </LocalizationLanguage.Consumer>
  )
}

Loader.propTypes = {}

export default Loader
