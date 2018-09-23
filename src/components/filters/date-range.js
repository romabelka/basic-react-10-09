import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import connect from 'react-redux/es/connect/connect'
import { setFilters } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    this.props.setFilters({
      ...this.props.filters,
      dateRange: DateUtils.addDayToRange(day, this.props.filters.dateRange)
    })
  }

  render() {
    const { from, to } = this.props.filters.dateRange || {}
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    filters: state.filters
  }),
  { setFilters }
)(DateRange)
