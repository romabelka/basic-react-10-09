import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isItemOpen: false
    }

    toggleItemVisibility = () => {
      this.setState({ isItemOpen: !this.state.isItemOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleItemVisibility={this.toggleItemVisibility}
        />
      )
    }
  }
