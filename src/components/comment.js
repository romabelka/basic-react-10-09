import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    console.log('comment', '---', 'rendering')
    const { comment } = this.props
    return (
      <div>
        <div>
          <h5>{article.comments.user}</h5>
        </div>
        {isOpen && <section>{article.comments.text}</section>}
      </div>
    )
  }
}

export default Comment
