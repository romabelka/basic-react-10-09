import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import {filterArticle} from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
      //DateUtils.addDayToRange(day, this.state);
      const { filterArticle } = this.props
      filterArticle(day)
  }

  render() {
    const { from, to } = this.props
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
    from: storeState.from,
    to: storeState.to
})

export default connect(
    mapStateToProps,
    { filterArticle }
)(DateRange)