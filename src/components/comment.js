import React, { Fragment } from 'react'

function Comment({ comment }) {
  return (
    <Fragment>
      <p>{comment.text}</p>
      <p>{comment.user}</p>
    </Fragment>
  )
}

export default Comment
