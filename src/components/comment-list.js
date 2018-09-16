import React, { Component } from 'react'
import toggleText from '../decorators/toggleText'

class CommentList extends Component {
  render() {
    const comments =
      this.props.article.comments &&
      this.props.article.comments.map((comment) => (
        <li key={comment.id}>
          <span>{comment.user}</span>
          <p>{comment.text}</p>
        </li>
      ))

    return (
      <div>
        <button onClick={this.props.handleClickComments}>
          {!this.props.openComments ? 'open comments' : 'close comments'}
        </button>
        <ul>{this.props.openComments && comments}</ul>
      </div>
    )
  }
}

export default toggleText(CommentList)
