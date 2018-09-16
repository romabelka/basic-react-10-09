import React, { PureComponent } from 'react'
import Comments from './comments/comments'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, isOpen, isOpenComments, toggleComments } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.toggleOpenWithId}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && (
          <section>
            {article.text}
            <Comments
              isOpen={isOpenComments}
              toggleComments={toggleComments}
              article={article}
            />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  toggleOpenWithId = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
