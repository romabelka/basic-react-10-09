import React from 'react'

class Comment extends React.Component {
  render() {
    const { user, text } = this.props.comment
    return (
      <div>
        <p>{user}</p>
        <section>{text}</section>
      </div>
    )
  }
}
export default Comment
