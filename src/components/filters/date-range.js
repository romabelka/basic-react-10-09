import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'
import { dateRangeSelector } from '../../selectors'
import { Consumer as LanguageConsumer } from '../../contexts/glossary'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    const mounths = [] //не придумала, как его обнулять при смене языка(((
    return (
      <div className="date-range">
        <LanguageConsumer>
          {(glossary) =>
            glossary.MONTHS.forEach((mounth) => mounths.push(mounth))
          }
        </LanguageConsumer>

        <DayPicker
          months={mounths}
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
    range: dateRangeSelector(state)
  }),
  { changeDateRange }
)(DateRange)
