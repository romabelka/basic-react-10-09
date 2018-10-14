import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { commentsSelector, commentsTotalSelector } from '../../selectors'
import CommentsCollection from '../comments-collection'

class CommentsPage extends Component {
  state = { pageInput: 1, pageFromUrl: 1 }
  render() {
    const { comments, match } = this.props
    if (match.isExact) this.goPage(1)
    return (
      <div>
        <Route
          path={'/comments/:page'}
          render={({ match }) => {
            return (
              <CommentsCollection
                page={+match.params.page}
                goPage={this.goPage}
                comments={comments}
                total={this.props.commentsTotal}
              />
            )
          }}
          exact
        />
      </div>
    )
  }

  goPage = (page) => {
    this.props.history.push(`/comments/${page}`)
  }
}

export default connect((state) => {
  return {
    comments: commentsSelector(state),
    commentsTotal: commentsTotalSelector(state)
  }
})(CommentsPage)
