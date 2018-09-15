import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isCollapsed: true
    }

    collapseItem = () => this.setState({ isCollapsed: !this.state.isCollapsed })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          collapseItem={this.collapseItem}
        />
      )
    }
  }
