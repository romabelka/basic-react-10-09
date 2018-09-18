import React, { PureComponent } from 'react'
import Comments from './comments'
import accordion from '../decorators/accordion'

class Article extends PureComponent {
  render() {
    const { article, isOpen, toggleOpenItem, openItemId } = this.props

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
            <section>{article.text}</section>
            <Comments
              comments={article.comments}
              isOpen={openItemId === article.id}
              toggleOpen={() => toggleOpenItem(article.id)}
            />
          </div>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default accordion(Article)
