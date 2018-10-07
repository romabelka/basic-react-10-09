import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../ac'
import { commentsLoadingSelector, commentsAllListSelector } from '../selectors'
import Loader from './common/loader'

export class CommentsAll extends Component {
  render() {
    const { loading } = this.props
    if (loading) return <Loader />
    return <div>{this.comments}</div>
  }

  get comments() {
    const { commentsAll } = this.props
    return (
      <ul>
        {commentsAll.map((comment) => (
          <li key={comment.id} className="test__comment-list--item">
            {comment.text} <b>by {comment.user}</b>
          </li>
        ))}
      </ul>
    )
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

export default connect(
  (state) => {
    return {
      commentsAll: commentsAllListSelector(state),
      loading: commentsLoadingSelector(state)
    }
  },
  { fetchData: loadAllComments }
)(CommentsAll)
