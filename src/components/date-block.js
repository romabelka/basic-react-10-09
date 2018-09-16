import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DateBlock extends Component {
  state = {
    dates: {
      from: '[date-from]',
      to: '[date-to]'
    }
  }
  /**
   * @param {Date} day
   * @param {'from'|'to'} fromOrTo */
  handleDayClick = (day, fromOrTo) => {
    this.setState((curState) => {
      let { dates } = curState
      let { from, to } = dates
      dates = { from, to }
      dates[fromOrTo] = day.toLocaleDateString()
      return { dates }
    })
  }
  render() {
    let { dates } = this.state
    return (
      <div className="date-block">
        <div>
          <span className="date-block__date-from">{dates.from}</span>
          <span> - </span>
          <span className="date-block__date-to">{dates.to}</span>
        </div>
        <div>
          <DayPicker
            ref="date-from"
            onDayClick={(day) => this.handleDayClick(day, 'from')}
          />
          <DayPicker
            ref="date-to"
            onDayClick={(day) => this.handleDayClick(day, 'to')}
          />
          />
        </div>
      </div>
    )
  }
}
