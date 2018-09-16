//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      if (this.state.openItemId !== openItemId) {
        this.setState({ openItemId })
      } else {
        this.setState({ openItemId: null })
      }
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
