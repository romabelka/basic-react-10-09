import React from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

const DateRange = (props) => {
  const { dateRange, handleSetDateRange } = props
  const handleDayClick = (day) =>
    handleSetDateRange(DateUtils.addDayToRange(day, dateRange))
  const { from, to } = dateRange
  const selectedRange =
    from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, dateRange)}
        onDayClick={handleDayClick}
      />
      {selectedRange}
    </div>
  )
}

DateRange.propTypes = {
  dateRange: PropTypes.object.isRequired,
  handleSetDateRange: PropTypes.func.isRequired
}

export default DateRange
