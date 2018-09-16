import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props

    return (
      <div>
        <h3>{comment.user}</h3>
        <div>{comment.text}</div>
      </div>
    )
  }
}

export default Comment
