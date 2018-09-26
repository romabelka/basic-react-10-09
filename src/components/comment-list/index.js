import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    isNewComment: PropTypes.bool,
    toggleOpen: PropTypes.func,
    addCommentOpen: PropTypes.func
  }

  /*
    static defaultProps = {
      comments: []
    }
  */

  render() {
    const { isOpen, toggleOpen, isNewComment, addCommentOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    const textNewComment = isNewComment ? 'close new comment' : 'add comment'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <button onClick={addCommentOpen}>{textNewComment}</button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
        {this.addNewComment()}
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }

  addNewComment() {
    const { isNewComment } = this.props
    if (!isNewComment) return null
    return <CommentForm />
  }
}

export default toggleOpen(CommentList)
