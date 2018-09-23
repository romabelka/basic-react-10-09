import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'
import { selectArticle, setDateRange } from '../../ac'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    filters: PropTypes.object,
    handleSelectArticle: PropTypes.func
  }

  render() {
    const {
      articles,
      filters,
      handleSelectArticle,
      handleSetDateRange
    } = this.props
    return (
      <div>
        <SelectFilter
          articles={articles}
          selectedArticlesList={filters.selectedArticlesList}
          handleSelectArticle={handleSelectArticle}
        />
        <DateRange
          dateRange={filters.dateRange}
          handleSetDateRange={handleSetDateRange}
        />
      </div>
    )
  }
}

export default connect(
  (state) => {
    const { articles, filters } = state

    return {
      articles,
      filters
    }
  },
  {
    handleSelectArticle: selectArticle,
    handleSetDateRange: setDateRange
  }
)(Filters)
