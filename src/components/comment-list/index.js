import React, { Component } from 'react'
import Comment from '../comment'
import CSSTransition from 'react-addons-css-transition-group'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
  /*
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object)
    }
    */

  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        <CSSTransition
          transitionName="comment"
          transitionAppear
          transitionEnterTimeout={700}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={500}
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
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
