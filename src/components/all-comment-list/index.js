import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../comment'
import './style.css'
import { loadAllComments } from '../../ac'
import Loader from '../common/loader'
import { commentsListSelector } from '../../selectors'
import { NavLink } from 'react-router-dom'

class AllCommentList extends Component {
  componentDidMount() {
    const { comments, page, loadAllComments } = this.props
    console.log(this.props)
    if (comments) loadAllComments(page * 5)
  }

  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    const { comments, loading } = this.props
    if (loading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          <div>
            <div>{this.comments}</div>
            <ul className="pagination">{this.pagintion} </ul>
          </div>
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((item) => (
          <li key={item.id} className="test__comment-list--item">
            <Comment id={item.id} />
          </li>
        ))}
      </ul>
    )
  }

  get pagintion() {
    console.log('pagination', this.props)
    const allpage = Math.floor(this.props.total / 5)
    const pageArray = Array.from(Array(allpage), (d, i) => i + 1)
    return pageArray.map((pagelist) => (
      <li key={pagelist}>
        <NavLink
          to={`/all-comments/${pagelist}`}
          activeStyle={{ color: 'red' }}
        >
          {pagelist}
        </NavLink>
      </li>
    ))
  }
}

export default connect(
  (state) => {
    console.log(state)
    return {
      comments: commentsListSelector(state),
      total: state.comments.total,
      loading: state.comments.loading
    }
  },
  { loadAllComments }
)(AllCommentList)
