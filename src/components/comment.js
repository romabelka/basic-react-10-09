import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  createCommentLoadedSelector,
  createCommentLoadingSelector,
  createCommentSelector
} from '../selectors'
import Loader from './common/loader'

function Comment({ comment, loading, loaded }) {
  return (
    <div>
      {comment && (
        <div>
          {comment.text} <b>by {comment.user}</b>
        </div>
      )}
      {loading && !loaded && <Loader />}
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }),
  loading: PropTypes.bool,
  loaded: PropTypes.bool
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()
  const loadingSelector = createCommentLoadingSelector()
  const loadedSelector = createCommentLoadedSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps),
    loading: loadingSelector(state, ownProps),
    loaded: loadedSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
