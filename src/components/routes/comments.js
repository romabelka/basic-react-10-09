import React, { Component } from 'react'
import AllCommentList from '../all-comment-list'
import { Route } from 'react-router-dom'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'comments list match:', this.props.match)
    return (
      <div>
        <Route path="/all-comments/" children={this.getComments} exact />
        <Route path="/all-comments/:page" children={this.getComments} exact />
      </div>
    )
  }

  getComments = ({ match }) => {
    console.log('---', 'article match: ', match)
    if (!match) return null

    return <AllCommentList page={match.params.page} key={match.params.page} />
  }
}

export default CommentsPage
