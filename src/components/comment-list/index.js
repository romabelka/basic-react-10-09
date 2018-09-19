import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="t-comment-list__button">
          {text}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="t-comment-list__item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="t-comment-list__title">No comments yet</h3>
      )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
