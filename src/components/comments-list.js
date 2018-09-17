import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'
import toggleOpen from '../decorators/toogle-open'

class CommentList extends Component {
  render() {
    const { comments, isOpenContent } = this.props

    return (
      <div>
        <p>Comments: </p>
        <button onClick={this.handleBtnClick}>
          {isOpenContent ? 'close comments' : 'open comments'}
        </button>
        {isOpenContent && comments ? <ul>{this.body}</ul> : ''}
      </div>
    )
  }

  get body() {
    const { toggleOpenItem, openItemId, comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment
          comment={comment}
          isOpen={openItemId === comment.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  handleBtnClick = () => this.props.switchOpenComponent()
}

const CommentListWithAccordion = accordion(CommentList)
const CommentListWithToggle = toggleOpen(CommentListWithAccordion)

export default CommentListWithToggle
