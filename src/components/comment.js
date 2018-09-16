import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h5>{comment.user}</h5>
        <div>{comment.text}</div>
      </div>
    )
  }
}

export default Comment
