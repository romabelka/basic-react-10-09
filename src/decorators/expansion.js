import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      expanded: false
    }

    toggleState = () => {
      return this.setState({
        expanded: !this.state.expanded
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleState={this.toggleState}
        />
      )
    }
  }
