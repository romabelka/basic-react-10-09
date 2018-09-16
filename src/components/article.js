import React, { PureComponent } from 'react'
import CommentList from './article-list'

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
          <div>
            <div>{article.text}</div>
            <CommentList comment={article.comments} />
          </div>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
