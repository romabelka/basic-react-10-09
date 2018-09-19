import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="comments__btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
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

    const body = comments.length ? (
      <ul className="comments__body">
        {comments.map((comment) => (
          <li key={comment.id} className="comments-list__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

CommentList.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default toggleOpen(CommentList)
