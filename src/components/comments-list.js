import React, { Component } from 'react'
import Comment from './comment'
import Accordion from '../decorators/accordion'

class CommentsList extends Component {
  render() {
    const { openItemId, toggleOpenItem, id } = this.props

    const handleClick = () => toggleOpenItem(id)

    return (
      <div>
        <button onClick={handleClick}>
          {openItemId === id
            ? 'Скрыть список комментариев'
            : 'Показать список комментариев'}
        </button>

        {openItemId === id && (
          <ul>
            {this.props.commentsList.map((comment) => (
              <li key={comment.id}>
                <Comment {...comment} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Accordion(CommentsList)
