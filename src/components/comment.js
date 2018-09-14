import React from 'react'

export default ({ user, text }) => {
  return (
    <div>
      <div>
        <h3>{user}</h3>
        <article>{text}</article>
      </div>
    </div>
  )
}
