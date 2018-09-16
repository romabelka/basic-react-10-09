import React from 'react'
import toggler from '../decorators/toggler'

class CommentsList extends React.Component {
  render() {
    const { isOpen, comments } = this.props
    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {isOpen ? 'close' : 'show'} comments
        </button>
        {isOpen &&
          comments && (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <b>{comment.user}</b>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>
          )}
      </div>
    )
  }

  handleBtnClick = () => {
    this.props.changeToggle()
  }
}

export default toggler(CommentsList)
