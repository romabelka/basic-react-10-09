import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DatePicker extends Component {
  state = {
    highlighted: {
      from: undefined,
      to: undefined
    }
  }

  handleDayClick = (day, { disabled }) => {
    if (disabled) return

    let from = this.state.highlighted.from
    let to = this.state.highlighted.to

    if (this.isEqualDates(this.state.highlighted.from, day)) {
      from = undefined
    } else if (this.isEqualDates(this.state.highlighted.to, day)) {
      to = undefined
    } else if (!this.state.highlighted.from) {
      from = day
    } else {
      to = day
    }

    this.setState({ highlighted: { from, to } })
  }

  isEqualDates = (date1, date2) =>
    date1 && date2 && new Date(date1).getTime() === new Date(date2).getTime()

  render() {
    const text =
      this.state.highlighted.from && this.state.highlighted.to
        ? `Selected days: ${this.state.highlighted.from.toLocaleDateString()} - ${this.state.highlighted.to.toLocaleDateString()}.`
        : 'Please select range of days.'
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          modifiers={this.state.highlighted}
          disabledDays={{
            before: this.state.highlighted.from,
            after: this.state.highlighted.to
          }}
        />
        <p>{text}</p>
      </div>
    )
  }
}

export default DatePicker
