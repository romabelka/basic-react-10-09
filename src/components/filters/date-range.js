import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterArticleDay } from '../../ac'
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state))
    this.handlefilterArticle(DateUtils.addDayToRange(day, this.state))
  }

  handlefilterArticle = (day) => {
    const { filterArticleDay } = this.props
    if (day.from && day.to) {
      filterArticleDay(day)
    }
  }

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
export default connect(
  null,
  { filterArticleDay }
)(DateRange)
