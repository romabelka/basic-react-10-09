import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) =>
  class ToggleOpen extends React.Component {
    static propTypes = {
      isOpen: PropTypes.bool
    }
    state = {
      isOpen: false
    }

    toggleOpen = () =>
      this.setState((state) => ({
        isOpen: !state.isOpen
      }))

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
