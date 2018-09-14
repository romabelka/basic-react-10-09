import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayRange extends Component {
  state = {
    from: null,
    to: null
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div>
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}
        </p>
        <DayPicker
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
}

export default DayRange
