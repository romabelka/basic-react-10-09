import React, { Component } from 'react'
import Comment from './comment'

class CommentsList extends Component {
  render() {
    console.log(this.props)
    const { comments, commentsOpened } = this.props
    if (!comments) {
      return ''
    }
    const commentsElements = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      )
    })
    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {commentsOpened ? 'close comments' : 'open comments'}
        </button>
        {commentsOpened && <ul>{commentsElements}</ul>}
      </div>
    )
  }

  handleBtnClick = () => this.props.toggleComments()
}

export default CommentsList
