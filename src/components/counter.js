import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'
import { LocalizationLanguage } from '../contexts/localization'

class Counter extends Component {
  static propTypes = {
    number: PropTypes.number,
    handleIncrement: PropTypes.func
  }

  render() {
    const { number, handleIncrement } = this.props
    return (
      <div>
        <h3>{number}</h3>
        <LocalizationLanguage.Consumer>
          {(language) => (
            <button onClick={handleIncrement}>{language.buttonCounter}</button>
          )}
        </LocalizationLanguage.Consumer>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  number: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
