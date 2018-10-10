import React from 'react'
import { Consumer as LocalConsumer } from '../../contexts/local'

function Loader() {
  return (
    <LocalConsumer>
      {(local) => (
        <h2>
          {local.loading}
          ...
        </h2>
      )}
    </LocalConsumer>
  )
}

Loader.propTypes = {}

export default Loader
