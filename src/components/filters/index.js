import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'
import { applyFilters, resetFilters } from '../../ac'

class Filters extends Component {
  static propTypes = {
    selected: PropTypes.array,
    dateRange: PropTypes.object,
    applyFilters: PropTypes.func,
    resetFilters: PropTypes.func
  }

  applyFiltersHandler = () =>
    this.props.applyFilters(this.props.selected, this.props.dateRange)

  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
        <button onClick={this.applyFiltersHandler}>Apply filters</button>
        <button onClick={this.props.resetFilters}>Reset filters</button>
      </div>
    )
  }
}

const mapStateToProps = ({ select, dateRange }) => ({
  selected: select,
  dateRange
})

export default connect(
  mapStateToProps,
  { applyFilters, resetFilters }
)(Filters)
