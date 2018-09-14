//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: ''
    }

    toggleOpenItem = (openItemId) => {
      openItemId === this.state.openItemId
        ? this.setState({ openItemId: '' })
        : this.setState({ openItemId })
    }

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
