import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class Comments extends Component {
  render() {
    const {
      comments = [],
      toggleOpenItem,
      isOpenComments,
      articleId,
      openItemId
    } = this.props

    return (
      <div>
        <button onClick={this.handleBtnClick}>
          {isOpenComments ? 'close' : 'open'}
        </button>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment
              comment={comment}
              isOpenComments={openItemId === articleId}
              toggleOpen={toggleOpenItem}
            />
          </li>
        ))}
      </div>
    )
  }
  handleBtnClick = () => this.props.toggleOpenItem(this.props.articleId)
}

const ArticleListWithAccordion = accordion(Comments)

export default ArticleListWithAccordion
