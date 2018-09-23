import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import { filterArticlesByRange } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  render() {
    const { from, to } = this.props.range
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.props.handleChangeRange}
        />
        {selectedRange}
      </div>
    )
  }
}

function mapStateToProps(storeState) {
  return {
    range: storeState.filter.range
  }
}

const mapDispatchToProps = {
  handleChangeRange: filterArticlesByRange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
