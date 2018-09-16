import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends Component {
  state = {
    selectedDay: undefined
  }

  handleDayClick = (day) => {
    this.setState({ selectedDay: day })
  }

  render() {
    return (
      <div>
        <DayPicker onDayClick={this.handleDayClick} />
        <h1>
          {this.state.selectedDay &&
            this.state.selectedDay.toLocaleDateString()}
        </h1>
      </div>
    )
  }
}

export default Calendar
