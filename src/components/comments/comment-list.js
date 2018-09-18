import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import PropTypes from 'prop-types'

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
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
      <ul className="test__comment-list--body">
        {comments.map((comment) => (
          <li key={comment.id} className="test__comment-list--item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--empty">No comments yet</h3>
    )

    return <div>{body}</div>
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ToggleCommentList = toggleOpen(CommentList)

export default ToggleCommentList
