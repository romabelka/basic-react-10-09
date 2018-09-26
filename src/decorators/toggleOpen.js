import React from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends React.Component {
    state = {
      isOpen: false,
      isNewComment: false
    }

    toggleOpen = () =>
      this.setState((state) => ({
        isNewComment: false,
        isOpen: !state.isOpen
      }))

    addCommentOpen = () =>
      this.setState((state) => ({
        isOpen: false,
        isNewComment: !state.isNewComment
      }))

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
          addCommentOpen={this.addCommentOpen}
        />
      )
    }
  }
