import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { user, text } = this.props

    return (
      <div className="comment">
        <h5 className="comment__author">{user}</h5>
        <p className="comment__text">{text}</p>
      </div>
    )
  }
}

export default Comment
