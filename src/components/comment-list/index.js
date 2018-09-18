import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'

import './style.css'
import PropTypes from 'prop-types'

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className="test__comment-list--btn" onClick={toggleOpen}>
          {text}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={700}
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
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test__comment-list--item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--message">No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
