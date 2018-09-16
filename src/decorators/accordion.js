//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null,
      stateItem: null
    }

    toggleOpenItemById = (openItemId) =>
      this.setState({
        openItemId: this.state.openItemId == openItemId ? null : openItemId
      })

    toggleOpenItem = (stateItem) =>
      this.setState({
        stateItem: !stateItem
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItemById={this.toggleOpenItemById}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
