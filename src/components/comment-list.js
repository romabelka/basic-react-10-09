import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  state = {
    isOpen: false
  }

  render() {
    console.log('CommentList')
    this.state.isOpen = this.props.stateItem
    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {this.state.isOpen ? 'close Comment' : 'open Comment'}
        </button>
        {this.state.isOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  handleBtnClick = () => this.props.toggleOpenItem(this.state.isOpen)
}

export default accordion(CommentList)
