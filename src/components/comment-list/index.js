import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { connect } from 'react-redux'
import { loadComments } from '../../ac'
import {
  commentsLoadingSelector,
  commentsLoadedSelector,
  commentsErrorSelector
} from '../../selectors'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
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
    const { isOpen, article, loadComments } = this.props
    if (!oldProps.isOpen && isOpen && !this.props.loaded)
      loadComments(article.id)
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

    if (!isOpen || (!this.props.loading && !this.props.loaded)) return null
    if (this.props.loading) return <Loader />

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
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state, ownProps),
    error: commentsErrorSelector(state)
  }
}
export default connect(
  mapStateToProps,
  { loadComments }
)(toggleOpen(CommentList))
