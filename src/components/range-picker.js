import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class RangePicker extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined
    })
  }

  render() {
    const { from, to } = this.state
    return (
      <div>
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && <button onClick={this.handleResetClick}>Reset</button>}
        </p>
        <DayPicker
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}

export default RangePicker
