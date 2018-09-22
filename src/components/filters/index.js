import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import articles from '../../fixtures'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter articles={articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
