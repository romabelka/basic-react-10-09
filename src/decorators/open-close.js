//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleClick={this.toggleClick}
        />
      )
    }
  }
