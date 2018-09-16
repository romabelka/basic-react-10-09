import React, { PureComponent } from 'react'
import './comments.css'
import CommentsList from './comments-list'

export default class Comments extends PureComponent {
  render() {
    let { isOpen, article } = this.props
    let { comments } = article
    return (
      <div className="comments">
        <button
          className="comments__toggle-btn"
          onClick={this.handleBtnCommentsClick}
        >
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && <CommentsList comments={comments} />}
      </div>
    )
  }
  handleBtnCommentsClick = () =>
    this.props.toggleComments(this.props.article.id)
}
