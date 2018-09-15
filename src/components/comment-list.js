import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  state = {
    isCommentsOpen: false
  }

  render() {
    return (
      <section>
        <div>
          <h4>Comments</h4>
          <button onClick={this.toggleCommentsVisibility}>
            {this.state.isCommentsOpen ? 'close' : 'open'}
          </button>
        </div>
        <ul>{this.body}</ul>
      </section>
    )
  }

  get body() {
    return (
      this.state.isCommentsOpen &&
      this.props.comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    )
  }

  toggleCommentsVisibility = () => {
    this.setState({ isCommentsOpen: !this.state.isCommentsOpen })
  }
}

export default CommentList
