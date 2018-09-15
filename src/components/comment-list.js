import React, { Component } from 'react'

import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  get commentList() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    )
  }

  get body() {
    const { toggleOpenList, isListOpen } = this.props
    return (
      <div>
        <button onClick={toggleOpenList}>
          {isListOpen ? 'close comments' : 'open comments'}
        </button>
        {isListOpen && this.commentList}
      </div>
    )
  }

  render() {
    return this.props.comments.length && this.body
  }
}

export default toggleOpen(CommentList)
