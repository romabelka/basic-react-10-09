import React, { PureComponent } from 'react'
import Comment from './article-comment'

class Article extends PureComponent {
  state = {
    commentsOpen: false,
    comments: []
  }

  componentDidMount() {
    this.setState({
      comments: this.props.article.comments || []
    })
  }

  toggleCommentsVisibility = () => {
    this.setState({
      commentsOpen: !this.state.commentsOpen
    })
  }

  render() {
    const { article, isOpen } = this.props
    const { commentsOpen, comments } = this.state

    const commentsMarkup =
      isOpen &&
      commentsOpen &&
      comments.map((comment) => (
        <Comment key={comment.id} user={comment.user} text={comment.text} />
      ))

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
            <button onClick={this.toggleCommentsVisibility.bind(this)}>
              {commentsOpen ? 'Hide' : 'Show'} comments
            </button>
          </section>
        )}
        {isOpen && commentsOpen && <section>{commentsMarkup}</section>}
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
