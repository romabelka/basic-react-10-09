import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'

import './style.css'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'

class CommentList extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
    isEnableAnim: PropTypes.bool,
    isShow: PropTypes.bool, // for correct Enzyme bug
    comments: PropTypes.array.isRequired
  }
  static defaultProps = {
    comments: [],
    isEnableAnim: true
  }

  render() {
    let { isOpen, toggleOpen, isEnableAnim, isShow } = this.props
    if (typeof isShow !== 'undefined') isOpen = isShow
    const text = isOpen ? 'hide comments' : 'show comments'

    return (
      <div className={'comments-list'}>
        <button onClick={toggleOpen}>{text}</button>
        {isEnableAnim ? (
          <CSSTransition
            transitionName={'comments-list__anim'}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.getBody()}
          </CSSTransition>
        ) : (
          this.getBody()
        )}
      </div>
    )
  }

  getBody() {
    let { comments, isOpen, isShow } = this.props
    // По неизвестным причинам в тестах - Enzyme Упрямо выставляет isOpen = false, пришлось завести ещё одно св-во
    // для корректировки
    if (typeof isShow !== 'undefined') isOpen = isShow
    if (!isOpen) return null
    const body = comments.length ? (
      <ul className={'comments__body'}>
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

export default toggleOpen(CommentList)
