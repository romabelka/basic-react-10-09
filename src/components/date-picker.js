import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DatePickerCont extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    const monthsNumber = 2

    return (
      <div>
        <p>
          {' '}
          Range picked from: {from && from.toLocaleDateString()} to:{' '}
          {to && to.toLocaleDateString()}
        </p>
        {from &&
          to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        <br />
        <DayPicker
          className="Selectable"
          numberOfMonths={monthsNumber}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }

  handleDayClick = (day) => {
    const { from, to } = this.state
    const fromNew = !from ? day : from > day ? day : from
    const toNew = from && from < day ? day : to

    this.setState({
      from: fromNew,
      to: toNew
    })
  }

  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined
    })
  }
}

export default DatePickerCont
