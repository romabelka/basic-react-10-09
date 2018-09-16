import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  state = {
    isOpen: false
  }

  render() {
    const { isOpen } = this.state
    return (
      <div>
        <h3>
          comments:
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        {isOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  handleBtnClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default CommentList
