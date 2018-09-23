import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticles } from '../../ac'
import { FILTER_BY_DATE } from '../../constants'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) =>
    this.props.filterArticles(
      DateUtils.addDayToRange(day, this.props.selectedDate),
      FILTER_BY_DATE
    )

  render() {
    const { from, to } = this.props.selectedDate
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
  (state) => ({ selectedDate: state.filters.selectedDate }),
  { filterArticles }
)(DateRange)
