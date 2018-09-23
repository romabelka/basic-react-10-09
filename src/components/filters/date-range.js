import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  // todo - should be change to dispatch
  handleDayClick = (day) =>
    this.setState(DateUtils.addDayToRange(day, this.props.selectedDate))

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

export default connect((state) => ({
  selectedDate: state.filters.selectedDate
}))(DateRange)
