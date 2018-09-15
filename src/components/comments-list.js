import React, { Component } from 'react'
import Comment from './comment'
import toggle from '../decorators/toggle'

class CommentsList extends Component {
  render() {
    const { comments, isItemOpen, toggleItem } = this.props
    console.log(comments)

    if (!comments) {
      console.log('no-comments')
    }

    return (
      <div className="comments">
        <button onClick={toggleItem}>
          {isItemOpen ? 'close comments' : 'open comments'}
        </button>

        {isItemOpen ? (
          comments ? (
            <React.Fragment>
              <h4 className="comments__title">Комментарии:</h4>
              <ul className="comments__list">
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <Comment user={comment.user} text={comment.text} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : (
            <p>No comments yet</p>
          )
        ) : (
          ''
        )}
      </div>
    )
  }
}

const CommentsListWithToggleItem = toggle(CommentsList)

export default CommentsListWithToggleItem
