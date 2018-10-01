import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import { loadComments } from '../../ac'
import Loader from '../common/loader'
import {
  commentsLoadingSelector,
  commentLoadedSelector,
  commentsErrorSelector
} from '../../selectors'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.string,
    loadComments: PropTypes.func,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  componentDidUpdate(prevProps) {
    const { isOpen, article, loadComments, loading, loaded } = this.props
    if (!prevProps.isOpen && isOpen && !loading && !loaded)
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
      article: { comments, id },
      isOpen,
      loading,
      loaded,
      error
    } = this.props

    if (error)
      return <div style={{ color: 'red' }}>Server is not available.</div>

    if (!isOpen || (!loading && !loaded)) return null

    if (loading) return <Loader />

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
    loaded: commentLoadedSelector(state, ownProps),
    error: commentsErrorSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { loadComments }
)(toggleOpen(CommentList))
