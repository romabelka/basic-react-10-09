import React, { PureComponent } from 'react'
import Comments from './comments'

class Article extends PureComponent {
  render() {
    const { isCommentOpen, toggleOpenComments, article, isOpen } = this.props

    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && (
          <section>
            {article.text}
            {article.comments ? (
              <Comments
                comments={article.comments}
                isCommentOpen={isCommentOpen}
                toggleOpenComments={toggleOpenComments}
                isItemOpen={isOpen}
              />
            ) : (
              ''
            )}
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
