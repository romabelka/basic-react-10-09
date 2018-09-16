import React from 'react'

const CommentsList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </li>
    ))}
  </ul>
)

export default CommentsList
