//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null,
      isCommentOpen: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: this.state.openItemId === openItemId ? null : openItemId
      })

    toggleOpenComments = () => {
      this.setState({
        isCommentOpen: !this.state.isCommentOpen
      })
    }

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
