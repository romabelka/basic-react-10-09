import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import connect from 'react-redux/es/connect/connect'
import { changeValueSelectFilter } from '../../ac'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter
          articles={this.props.articles}
          selectFilter={this.props.filters.selectFilter}
          filterAction={this.props.changeValueSelectFilter}
        />
        <DateRange />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    filters: state.filters,
    articles: state.articles
  }),
  { changeValueSelectFilter }
)(Filters)
