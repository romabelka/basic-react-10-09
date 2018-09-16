import React from 'react'
import Comment from './comment'

const styles = {
  comments: {
    marginTop: '10px'
  }
}

class Comments extends React.Component {
  render() {
    const { isOpen, comments, toggleOpen } = this.props

    return (
      <div>
        <div style={styles.comments}>
          <strong>Комментарии: {comments.length}</strong>
          <button onClick={toggleOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
        </div>
        {isOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default Comments
