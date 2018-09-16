import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentsList extends Component {
  render() {
    const { toggleOpenItem, openItemId, comments, commentsOpened } = this.props
    if (!comments) {
      return ''
    }
    const commentsElements = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment
            comment={comment}
            isOpen={openItemId === comment.id}
            toggleOpen={toggleOpenItem}
          />
        </li>
      )
    })
    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {commentsOpened ? 'close comments' : 'open comments'}
        </button>
        {commentsOpened && <ul>{commentsElements}</ul>}
      </div>
    )
  }

  handleBtnClick = () => this.props.toggleComments()
}

const CommentsListWithAccordion = accordion(CommentsList)

export default CommentsListWithAccordion
