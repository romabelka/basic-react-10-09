import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsSelector, commentsLoadingSelector } from '../selectors'
import { loadAllComments } from '../ac'
import Comment from './comment'
import Loader from './common/loader'

class CommentsFullList extends Component {
  static propTypes = {
    comments: PropTypes.object,
    loading: PropTypes.bool,
    fetchData: PropTypes.func,
    offset: PropTypes.number,
    limit: PropTypes.number
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
    const { fetchData, limit, offset } = this.props

    if (fetchData) fetchData(limit, offset)
  }
}

export default connect(
  (state) => ({
    comments: commentsSelector(state),
    loading: commentsLoadingSelector(state)
  }),
  { fetchData: loadAllComments }
)(CommentsFullList)
