import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import {filterArticle, setRange} from '../../ac'
import 'react-day-picker/lib/style.css'
import PropTypes from "prop-types";

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.object,
        to: PropTypes.object,
        handleSetRange: PropTypes.func,
        handleUpdateArticles: PropTypes.func
    }

  handleDayClick = (day) => {
      const { handleUpdateArticles, handleSetRange, from, to } = this.props
      handleSetRange(day)
      handleUpdateArticles(from, to)
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
    from: storeState.range.from,
    to: storeState.range.to
})

const mapDispatchToProps = {
    handleSetRange: setRange,
    handleUpdateArticles: filterArticle
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DateRange)