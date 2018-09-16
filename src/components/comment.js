import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h3>{comment.user}</h3>
        <section>{comment.text}</section>
      </div>
    )
  }
}

export default Comment
