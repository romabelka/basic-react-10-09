import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    changeToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          changeToggle={this.changeToggle}
        />
      )
    }
  }
