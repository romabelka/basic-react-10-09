import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { selectRange } from '../../ac'

import 'react-day-picker/lib/style.css'
import PropTypes from 'prop-types'

class DateRange extends Component {
  static propTypes = {
    dateRange: PropTypes.object,
    selectRange: PropTypes.func
  }

  handleDayClick = (day) =>
    this.props.selectRange(DateUtils.addDayToRange(day, this.props.dateRange))

  render() {
    const { from, to } = this.props.dateRange
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

const mapStateToProps = ({ dateRange }) => ({
  dateRange
})

export default connect(
  mapStateToProps,
  { selectRange }
)(DateRange)
