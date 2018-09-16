import React, { PureComponent } from 'react'
import './comments.css'
import CommentsList from './comments-list'
import toggleOpen from '../../decorators/toggle-open'

class Comments extends PureComponent {
  render() {
    let { isOpen, toggleOpen, article } = this.props
    let { comments } = article
    return (
      <div className="comments">
        <button className="comments__toggle-btn" onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && <CommentsList comments={comments} />}
      </div>
    )
  }
}

export default toggleOpen(Comments)
