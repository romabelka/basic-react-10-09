import React, { PureComponent } from 'react'
import CommentsList from './comments-list'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, isOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close description' : 'open description'}
          </button>
        </div>
        {isOpen && <section>{article.text}</section>}

        <div>
          {article.comments &&
            article.comments.length && (
              <CommentsList
                comments={article.comments}
                articleId={article.id}
              />
            )}
        </div>
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () =>
    this.props.toggleOpen(!this.props.isOpen ? this.props.article.id : null)
}

export default Article
