import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCommentsByArticleId } from '../../ac'
import { commentsSelector, createCommentLoadingSelector } from '../../selectors'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../common/loader'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    commentsMap: PropTypes.object,
    fetchData: PropTypes.func,
    isLoading: PropTypes.bool,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadCommentsByArticleId, commentsMap } = this.props

    if (
      !oldProps.isOpen &&
      isOpen &&
      !article.comments.every((comment) => commentsMap.get(comment))
    ) {
      loadCommentsByArticleId(article.id)
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
      isOpen,
      commentsMap,
      isLoading
    } = this.props
    if (!isOpen) return null
    if (isLoading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length &&
        comments.every((comment) => commentsMap.get(comment)) ? (
          this.comments
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    const { article } = this.props
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} articleId={article.id} />
          </li>
        ))}
      </ul>
    )
  }
}

const createMapStateToProps = () => {
  const commentLoadingSelector = createCommentLoadingSelector()

  return (state, ownProps) => ({
    isLoading: commentLoadingSelector(state, ownProps),
    commentsMap: commentsSelector(state)
  })
}

export default connect(
  createMapStateToProps,
  { loadCommentsByArticleId }
)(toggleOpen(CommentList))
