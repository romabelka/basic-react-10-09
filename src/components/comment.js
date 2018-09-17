import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment, isOpenComments } = this.props
    return (
      isOpenComments && (
        <div>
          <h3>{comment.user}</h3>
          <section>{comment.text}</section>
        </div>
      )
    )
  }
}

export default Comment
