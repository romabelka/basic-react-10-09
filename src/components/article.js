import React, { PureComponent } from 'react'
import Comments from './comments-list'

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
            <section>{article.text}</section>{' '}
            <Comments comments={article.comments} />{' '}
          </div>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
