import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {
  state = {
    from: null,
    to: null
  }
  render() {
    const { from, to } = this.state
    return (
      <div>
        <DayPicker
          className="Selectable"
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
        <div>{from && to && `from: ${from} to: ${to}`}</div>
      </div>
    )
  }
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
}
export default Calendar
