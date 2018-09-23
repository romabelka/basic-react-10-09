import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setDate } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { date, setDate } = this.props
    setDate(DateUtils.addDayToRange(day, date))
  }

  render() {
    const { from, to } = this.props.date
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

const mapStateToProps = (storeState) => ({
  date: storeState.dateRange
})

export default connect(
  mapStateToProps,
  { setDate }
)(DateRange)
