import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test_comment_item">
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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)
