import React, { Component } from 'react'
import collapse from '../decorators/collapse'

class Comments extends Component {
  render() {
    const { collapseItem, isCollapsed, comments } = this.props

    if (comments) {
      return (
        <div>
          <button onClick={collapseItem}>
            {isCollapsed ? 'Show' : 'Hide'} comments
          </button>
          {!isCollapsed &&
            comments.map((comment) => (
              <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
              </div>
            ))}
        </div>
      )
    } else {
      return <div>No comments yet</div>
    }
  }
}

export default collapse(Comments)
