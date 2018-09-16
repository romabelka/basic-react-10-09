import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import articles from '../fixtures'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, isOpen } = this.props
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
            <CommentList comments={article.comments} />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.openItemId === this.props.article.id
      ? this.props.toggleOpen(null)
      : this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
