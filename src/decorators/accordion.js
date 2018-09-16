//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.PureComponent {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      const { openItemId: currentOpenItemId } = this.state

      if (currentOpenItemId === openItemId) {
        this.setState({ openItemId: null })
      } else {
        this.setState({ openItemId })
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
