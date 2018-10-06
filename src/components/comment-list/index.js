import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { loadCommentsByArticleId } from '../../ac'
import { connect } from 'react-redux'
import {
  commentsIdsSelector,
  commentsLoadedSelector,
  commentsLoadingSelector
} from '../../selectors'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate(oldProps) {
    const {
      isOpen,
      article: { commentsLoading, commentsLoaded }
    } = this.props
    if (!oldProps.isOpen && isOpen && !commentsLoading && !commentsLoaded) {
      this.props.fetchData(this.props.article.id)
    }
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
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const {
      article: { comments = [], id },
      isOpen
    } = this.props
    if (!isOpen) return null
    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    const { commentsLoading, commentsLoaded } = this.props.article
    return commentsLoading && !commentsLoaded ? (
      <Loader />
    ) : (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    comments: commentsIdsSelector(state, ownProps.article.id),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  {
    fetchData: loadCommentsByArticleId
  }
)(toggleOpen(CommentList))
