import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
  render() {
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
            <p>{article.text}</p>
            <CommentList comments={article.comments} />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => {
    // console.log(titleRef)
  }

  handleBtnClick = () => {
    if (this.props.isOpen && this.state.commentsOpen) {
      this.setState({
        commentsOpen: false
      })
    }

    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
