import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import articles from '../../fixtures'

class Filters extends Component {
  static propTypes = {}

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
