import React, { PureComponent } from 'react'
import CommentsList from './comment-list'

class Article extends PureComponent {
  state = {
    isOpenComments: false
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close' : 'read more'}
          </button>
        </div>
        {isOpen && (
          <section>
            <p>{article.text}</p>
            {article.comments && (
              <button onClick={this.toggleComments}>
                {this.state.isOpenComments ? 'close' : 'show'} comments
              </button>
            )}
            {this.state.isOpenComments &&
              article.comments && <CommentsList comments={article.comments} />}
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
    this.setState({
      isOpenComments: false
    })
  }

  toggleComments = () => {
    this.setState({
      isOpenComments: !this.state.isOpenComments
    })
  }
}

export default Article
