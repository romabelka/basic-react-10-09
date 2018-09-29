import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { selectDay } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  // state = {
  // 	from: null,
  // 	to: null
  // }

  handleDayClick = (day) => {
    this.props.selectDay(DateUtils.addDayToRange(day, this.props.range))
    //this.setState(DateUtils.addDayToRange(day, this.state))
  }

  render() {
    const { from, to } = this.props.range
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
    range: state.filters.dateRange
  }),
  { selectDay }
)(DateRange)
