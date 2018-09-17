import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: null
    }

    toggleOpenComments = () =>
      this.setState({
        isOpen: !this.state.isOpen
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleCommentsVisibility}
        />
      )
    }
  }
