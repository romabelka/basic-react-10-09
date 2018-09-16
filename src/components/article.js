import React, { PureComponent } from 'react'
import CommentsList from './comment-list'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <article>
        <h3>{article.title}</h3>
        <button onClick={this.handleBtnClick}>
          {isOpen ? 'close' : 'read more'}
        </button>
        {isOpen && (
          <div>
            <p>{article.text}</p>
            <CommentsList comments={article.comments} />
          </div>
        )}
      </article>
    )
  }

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
