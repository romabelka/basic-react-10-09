import React, { Component } from 'react'
import Comments from '../comments'
import { Route, Redirect } from 'react-router-dom'

class CommentsPage extends Component {
  render() {
    return (
      <div>
        <Route path="/comments/:page" children={this.getComments} exact />
      </div>
    )
  }

  getComments = ({ match }) => {
    if (!match) return <Redirect to="/comments/1" />

    const { page } = match.params
    if (isNaN(page)) return <Redirect to="/comments/1" />

    return <Comments key={page} page={page} />
  }
}

export default CommentsPage
