import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import articlesFilterProptype from './articles-proptype'

class Filters extends Component {
  static propTypes = {
    ...articlesFilterProptype
  }

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
