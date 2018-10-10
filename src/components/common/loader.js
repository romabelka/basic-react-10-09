import React from 'react'
import { Consumer as LanguageConsumer } from '../../contexts/glossary'

function Loader() {
  return (
    <LanguageConsumer>
      {(glossary) => <h3>{glossary.loading}</h3>}
    </LanguageConsumer>
  )
}

Loader.propTypes = {}

export default Loader
