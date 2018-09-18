import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentsList extends Component {
  state = {
    isOpen: false
  }

  render() {
    this.state.isOpen = this.props.stateItem

    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {this.state.isOpen ? 'hide comments' : 'show comments'}
        </button>
        {this.state.isOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  get body() {
    const { comments } = this.props

    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  handleBtnClick = () => this.props.toggleOpenComments(this.state.isOpen)
}

const CommentListWithAccordion = accordion(CommentsList)

export default CommentListWithAccordion
