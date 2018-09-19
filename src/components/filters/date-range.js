import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static propTypes = {
    day: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
  }

  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) =>
    this.setState(DateUtils.addDayToRange(day, this.state))

  render() {
    const { from, to } = this.state
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

export default DateRange
