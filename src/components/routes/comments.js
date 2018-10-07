import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink } from 'react-router-dom'
import CommentsFullList from '../../components/comment-list-full'
import { connect } from 'react-redux'
import { commentsTotalSelector } from '../../selectors'

class CommentsPage extends Component {
  static propTypes = {
    total: PropTypes.number
  }

  state = {
    limit: 5
  }

  pageCount = () => {
    const { limit } = this.state
    const { total } = this.props

    return Math.ceil(total / limit)
  }

  render() {
    return (
      <div>
        <Route path="/comments/:page" children={this.getComments} exact />
        <ul>{this.pagination}</ul>
      </div>
    )
  }

  get pagination() {
    return [...new Array(this.pageCount())].map((val, ind) => (
      <li key={ind + 1}>
        <NavLink to={`/comments/${ind + 1}`} activeStyle={{ color: 'green' }}>
          Page {ind + 1}
        </NavLink>
      </li>
    ))
  }

  getComments = ({ match }) => {
    const { limit } = this.state
    const offset = match ? (match.params.page - 1) * limit : 0

    return (
      <CommentsFullList
        limit={limit}
        offset={offset}
        key={match ? match.params.page : 1}
      />
    )
  }
}

export default connect((state) => ({ total: commentsTotalSelector(state) }))(
  CommentsPage
)
