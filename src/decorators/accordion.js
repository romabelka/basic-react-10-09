//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      console.log(this.state.openItemId)
      if (openItemId !== this.state.openItemId) {
        this.setState({ openItemId: openItemId })
      } else {
        this.setState({ openItemId: this.state.false })
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
