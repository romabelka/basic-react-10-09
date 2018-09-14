import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { id, user, text } = this.props

    return (
      <div key={id}>
        <p>{id}</p>
        <p>{user}</p>
        <p>{text}</p>
      </div>
    )
  }
}

export default Comment
