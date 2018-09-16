import React from 'react'

export default function commentList(props) {
  return (
    <ul>
      {props.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <strong>{comment.user}</strong>
            <div>{comment.text}</div>
          </li>
        )
      })}
    </ul>
  )
}
