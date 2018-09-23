import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setDateFilter } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  render() {
    const handleDayClick = (day) => {
      handleChange(DateUtils.addDayToRange(day, daterange))
    }
    const { daterange, handleChange } = this.props
    const selectedRange =
      daterange.from &&
      daterange.to &&
      `${daterange.from.toDateString()} - ${daterange.to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, daterange)}
          onDayClick={handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}
const mapDispatchToProps = {
  handleChange: setDateFilter
}
export default connect(
  (state) => ({
    daterange: state.filter.dateRange
  }),
  mapDispatchToProps
)(DateRange)
