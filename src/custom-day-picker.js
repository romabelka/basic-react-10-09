import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class CustomDayPicker extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {}
  }

  handler = function(day) {
    this.setState(DateUtils.addDayToRange(day, this.state))
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <p>
          {from &&
            to &&
            `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`}
        </p>
        <DayPicker
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handler}
        />
      </div>
    )
  }
}

export default CustomDayPicker
