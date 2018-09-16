import React, { Component } from 'react'
import Comment from './comment'
import toggle from '../decorators/toggle'

class CommentList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  handleBtnClick = () => this.props.toggle()

  get body() {
    const { comments, isOpen } = this.props

    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {isOpen ? 'close comments' : 'open comments'}
        </button>

        {isOpen && (
          <div>
            {!comments && <b>No comments yet</b>}

            {comments &&
              comments.map((comment) => (
                <li key={comment.id}>
                  <Comment comment={comment} />
                </li>
              ))}
          </div>
        )}
      </div>
    )
  }
}

const CommentListWithToggle = toggle(CommentList)

export default CommentListWithToggle
