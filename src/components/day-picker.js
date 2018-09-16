import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import localization from '../localization'
import 'react-day-picker/lib/style.css'

export default class Calendar extends Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  state = {
    from: undefined,
    to: undefined,
    locale: 'ru'
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState({
      from: range.from,
      to: range.to
    })
  }

  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined
    })
  }

  render() {
    const { from, to, locale } = this.state
    const modifiers = { start: from, end: to }
    const {
      MONTHS,
      WEEKDAYS_LONG,
      WEEKDAYS_SHORT,
      FIRST_DAY_OF_WEEK,
      LABELS
    } = localization
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Выберете начальную дату.'}
          {from && !to && 'Выберете конечную дату.'}
          {from &&
            to &&
            `Выбрана дада с ${from.toLocaleDateString()} по
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Сбросить
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
        />
      </div>
    )
  }
}
