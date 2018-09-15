import React from 'react'

export default (OriginalComponent) =>
  class DecoratedToggle extends React.Component {
    state = {
      isItemOpen: false
    }

    toggleItem = () => {
      this.setState({
        isItemOpen: !this.state.isItemOpen
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleItem={this.toggleItem}
        />
      )
    }
  }
