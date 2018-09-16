import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props

    return (
      <figure>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </figure>
    )
  }
}

export default Comment
