import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setDaterangeFilter } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static propTypes = {
    range: PropTypes.object,
    setRangeFilter: PropTypes.func
  }

  handleDayClick = (day) => {
    const { range, setRangeFilter } = this.props

    console.log(
      'handleDayClick',
      day,
      range,
      DateUtils.addDayToRange(day, range)
    )
    const rangeC = DateUtils.addDayToRange(day, range)

    console.log('range', rangeC)

    setRangeFilter(rangeC)
  }

  render() {
    console.log('render', this.props)

    const { from, to } = this.props.range
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
  range: storeState.filters.range
})

const mapDispatchToProps = {
  setRangeFilter: setDaterangeFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
