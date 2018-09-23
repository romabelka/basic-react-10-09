import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticles } from '../../ac'
import { FILTER_BY_DATE } from '../../constants'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) =>
    this.props.filterArticles(
      DateUtils.addDayToRange(day, this.props.datesFilter),
      FILTER_BY_DATE,
      this.props.articles
    )

  render() {
    const { from, to } = this.props.datesFilter
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
    articles: Object.assign([], state.articles), // just for test example (deep copy is absent)
    datesFilter: state.filter.datesFilter
  }),
  { filterArticles }
)(DateRange)
