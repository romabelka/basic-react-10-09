import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentsList extends Component {
  render() {
    return <div>{this.body}</div>
  }

  get body() {
    const { openItemId, comments, articleId } = this.props

    const isCommentsOpen = openItemId === articleId
    const renderingComments = comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))

    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {isCommentsOpen ? 'close comments' : 'open comments'}
        </button>
        <ul>{isCommentsOpen && renderingComments}</ul>
      </div>
    )
  }

  handleBtnClick = () => {
    return this.props.toggleOpenItem(
      !this.props.openItemId ? this.props.articleId : null
    )
  }
}

export default accordion(CommentsList)
