import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, comments, isOpen } = this.props
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
            <CommentList comments={comments ? comments : []} />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () =>
    this.props.toggleOpen(this.props.isOpen ? null : this.props.article.id)
}

export default Article
