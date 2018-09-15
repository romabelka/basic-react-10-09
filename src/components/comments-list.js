import React, { Component } from 'react'
import Comment from './comment'

class CommentsList extends Component {
  state = {
    areCommentsOpen: false
  }

  toggleComments = () => {
    this.setState({
      areCommentsOpen: !this.state.areCommentsOpen
    })
  }

  render() {
    const { comments } = this.props

    return (
      <div className="comments">
        <button onClick={this.toggleComments}>
          {this.state.areCommentsOpen ? 'close comments' : 'open comments'}
        </button>

        {this.state.areCommentsOpen ? (
          <React.Fragment>
            <h4 className="comments__title">Комментарии:</h4>
            <ul className="comments__list">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <Comment user={comment.user} text={comment.text} />
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default CommentsList
