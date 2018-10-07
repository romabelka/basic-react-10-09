import React, { Component } from 'react'
import CommentsAll from '../comments-all'
import Paginator from '../common/paginator'
import { Route } from 'react-router-dom'
import { commentsLengthSelector } from '../../selectors'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    const { commentsLength } = this.props
    console.log('---', 'comments list match:', this.props.match)
    return (
      <div>
        <Route path="/comments/:page" children={this.getComments} exact />
      </div>
    )
  }

  getComments = ({ match }) => {
    const { commentsLength } = this.props
    console.log('---', 'article match: ', match)
    if (!match)
      return (
        <div>
          <CommentsAll />
          <Paginator
            totalLength={commentsLength}
            itemsOnPage={5}
            itemStartNumber={0}
          />
        </div>
      )

    return (
      <div>
        <CommentsAll page={match.params.page} />
        <Paginator
          totalLength={commentsLength}
          itemsOnPage={5}
          itemStartNumber={(match.params.page - 1) * 5}
          key={match.params.page}
        />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    commentsLength: commentsLengthSelector(state)
  }
})(CommentsPage)
