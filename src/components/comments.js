import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from './comment'
import Loader from './common/loader'
import { loadCommentsPage } from './../ac'
import {
  commentsTotalSelector,
  commentsPageLoadingSelector,
  commentsPageLoadedSelector,
  commentsPageErrorSelector,
  commentsPageSelector
} from './../selectors'

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.object,
    page: PropTypes.string,
    total: PropTypes.number,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.string,
    loadCommentsPage: PropTypes.func
  }

  componentDidMount() {
    const { loadCommentsPage, page, loaded, loading } = this.props
    if (!loaded && !loading) loadCommentsPage(page)
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }

  get pagination() {
    const { total, page } = this.props
    const limit = 5
    const prev = parseInt(page, 10) - 1
    const next = parseInt(page, 10) + 1
    const lastPage = Math.ceil(total / limit)

    return (
      <div>
        {prev > 0 ? (
          <Link to={`/comments/${prev}`}>prev</Link>
        ) : (
          <span>prev</span>
        )}
        {next <= lastPage ? (
          <Link to={`/comments/${next}`}>next</Link>
        ) : (
          <span>next</span>
        )}
      </div>
    )
  }

  render() {
    const { loading, loaded, error } = this.props

    if (error)
      return <div style={{ color: 'red' }}>Server is not available.</div>
    if (!loading && !loaded) return null
    if (loading) return <Loader />

    return (
      <div>
        {this.comments}
        {this.pagination}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: commentsPageSelector(state, ownProps),
    total: commentsTotalSelector(state),
    loading: commentsPageLoadingSelector(state, ownProps),
    loaded: commentsPageLoadedSelector(state, ownProps),
    error: commentsPageErrorSelector(state, ownProps)
  }
}

export default connect(
  mapStateToProps,
  { loadCommentsPage }
)(Comments)
