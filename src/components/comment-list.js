import React, { Component } from 'react'
import Comment from './article-comment'
import commentListSwitchable from '../decorators/commentListSwitchable'

class CommentList extends Component {
  render() {
    return <ul>{this.comments}</ul>
  }

  get comments() {
    const { comments } = this.props

    return comments.map((comment) => (
      <Comment key={comment.id} user={comment.user} text={comment.text} />
    ))
  }
}

const CommentListSwitchable = commentListSwitchable(CommentList)

export default CommentListSwitchable
