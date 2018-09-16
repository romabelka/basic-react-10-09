import React, { PureComponent } from 'react'
import CommentsList from './comments-list'

class Article extends PureComponent {
  state = {
    commentsOpened: false
  }

  render() {
    //console.log('---', 'rendering')
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
            <CommentsList
              comments={article.comments}
              commentsOpened={this.state.commentsOpened}
              toggleComments={this.toggleComments}
            />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }

  toggleComments = () =>
    this.setState({ commentsOpened: !this.state.commentsOpened })

  componentDidUpdate() {
    if (!this.props.isOpen) {
      this.setState({ commentsOpened: false })
    }
  }
}

export default Article
