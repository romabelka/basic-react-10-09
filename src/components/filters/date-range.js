import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticle, setRange } from '../../ac'
import 'react-day-picker/lib/style.css'
import PropTypes from "prop-types";

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.object,
        to: PropTypes.object
    }

  handleDayClick = (day) => {
      setRange(day)
      const { filterArticle } = this.props
      console.log(this.props)
      filterArticle(this.props.from, this.props.to)
   }

  render() {
    const { from, to } = this.props
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          numberOfMonths={4}
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
    { filterArticle, setRange }
)(DateRange)