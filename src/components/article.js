import React, { PureComponent } from 'react'

import CommentList from './comment-list'

class Article extends PureComponent {
  get articleBody() {
    const { article } = this.props
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
  render() {
    console.log('---', 'rendering')

    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        </div>
        {isOpen && this.articleBody}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)
}

export default Article
