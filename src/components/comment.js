import React from 'react'

const Comment = ({ comment }) => (
  <div>
    <p>
      <strong>{comment.user}</strong>
    </p>
    <p>{comment.text}</p>
  </div>
)

export default Comment
