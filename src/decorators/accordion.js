//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null,
      stateItem: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: this.state.openItemId === openItemId ? null : openItemId
      })
    toggleOpenComments = (stateItem) =>
      this.setState({
        stateItem: !stateItem
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
          toggleOpenComments={this.toggleOpenComments}
        />
      )
    }
  }
