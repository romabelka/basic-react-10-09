import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <div>
        {comments.map((item) => (
          <Comment
            key={item.id}
            id={item.id}
            user={item.user}
            text={item.text}
          />
        ))}
      </div>
    )
  }
}

export default CommentList
