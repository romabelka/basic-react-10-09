import React, { PureComponent } from 'react'

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
            <br />
            Comments:
            <ul>{this.getComments(article)}</ul>
          </section>
        )}
      </div>
    )
  }

  getComments = (article) => {
    return article.comments.map((comment) => (
      <li key={comment.id}>{comment.text}</li>
    ))
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
