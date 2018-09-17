//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpenContent: false
    }

    switchOpenComponent = () => {
      this.setState({ isOpenContent: !this.state.isOpenContent })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          switchOpenComponent={this.switchOpenComponent}
        />
      )
    }
  }
