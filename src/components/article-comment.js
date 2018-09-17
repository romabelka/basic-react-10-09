import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  // у комментов могут появиться лайки
  render() {
    const { user, text } = this.props
    return (
      <div>
        <div>
          <h4>{user}</h4>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Comment
