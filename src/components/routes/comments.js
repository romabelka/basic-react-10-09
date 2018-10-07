import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  commentsSelector,
  commentsLoadingSelector,
  commentsLoadedSelector
} from '../../selectors'
import { loadAllComments } from '../../ac'
import Comment from '../comment'
import Loader from '../common/loader'

class CommentsPage extends Component {
  static propTypes = {
    comments: PropTypes.object,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    fetchData: PropTypes.func
  }

  render() {
    const { comments, loading } = this.props

    if (loading) return <Loader />
    if (!comments.size) return <h3>No comments yet</h3>

    return <div>{this.comments}</div>
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.keySeq().map((id) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }

  componentDidMount() {
    const { fetchData, loaded } = this.props

    if (!loaded) fetchData && fetchData()
  }
}

export default connect(
  (state) => ({
    comments: commentsSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  { fetchData: loadAllComments }
)(CommentsPage)
