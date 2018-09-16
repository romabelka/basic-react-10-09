import React, { Component } from 'react'
import Comment from './comment'
import openClose from '../decorators/open-close.js'

class CommentList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { comments, isOpen, toggleClick } = this.props

    return (
      <div>
        <hr />
        {comments && (
          <button onClick={toggleClick}>
            {isOpen ? 'close comments' : 'open comments'}
          </button>
        )}
        {comments &&
          isOpen &&
          comments.map((item) => (
            <Comment
              key={item.id}
              id={item.id}
              user={item.user}
              text={item.text}
            />
          ))}
      </div>
    )
  }
}

export default openClose(CommentList)
