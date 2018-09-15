import React, { Component } from 'react'
import Comment from './comment'
import toggler from '../decorators/toggler'

class CommentList extends Component {
  render() {
    return (
      <section>
        <div>
          <h4>Comments</h4>
          <button onClick={this.props.toggleItemVisibility}>
            {this.props.isItemOpen ? 'close' : 'open'}
          </button>
        </div>
        <ul>{this.body}</ul>
      </section>
    )
  }

  get body() {
    return (
      this.props.isItemOpen &&
      this.props.comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    )
  }
}

export default toggler(CommentList)
