//decorator === HOC === Higher Order Component
import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    static propTypes = {
      openItemId: PropTypes.string
    }

    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
