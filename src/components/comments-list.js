import React from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class Comments extends React.Component {
  render() {
    const handleBtnClick = () => toggleOpenItem(id)
    const { openItemId, id, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={handleBtnClick}>
          {openItemId === id ? 'Close comments' : 'Open comments'}
        </button>
        {openItemId === id && <ul>{this.getcomments()}</ul>}
      </div>
    )
  }
  getcomments() {
    if (this.props.comments) {
      return this.props.comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    }
  }
}
export default accordion(Comments)
