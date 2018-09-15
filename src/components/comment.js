import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const comment = this.props.comment
    return (
      <div>
        <div>{comment.user}</div>
        <div>{comment.text}</div>
      </div>
    )
  }
}

export default Comment
