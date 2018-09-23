import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

import { filterArticles } from '../../ac/'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const { onFilterChange, from, to, selected, articles } = this.props
    return (
      <div>
        <SelectFilter
          onFilterChange={onFilterChange}
          selected={selected}
          articles={articles}
        />
        <DateRange onFilterChange={onFilterChange} range={{ from, to }} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      articles: state.articles.list,
      ...state.articles.filter
    }
  },
  {
    onFilterChange: filterArticles
  }
)(Filters)
