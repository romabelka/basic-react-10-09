import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/ru'
import 'react-day-picker/lib/style.css'

class Calendar extends React.PureComponent {
  state = {
    from: undefined,
    to: undefined
  }

  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Пожалуйста выберите дату начала'}
          {from && !to && 'Пожалуйста выберите дату конца.'}
          {from &&
            to &&
            `Выбранный интервал от ${from.toLocaleDateString()} до ${to.toLocaleDateString()}`}{' '}
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
          localeUtils={MomentLocaleUtils}
          locale="ru"
        />
      </div>
    )
  }
}

export default Calendar
