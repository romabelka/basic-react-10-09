import React from 'react'
import expansion from '../decorators/expansion'

class Comments extends React.Component {
  render() {
    const { article, expanded } = this.props
    return (
      <div>
        Comments:
        <button onClick={this.handleBtnClick}>
          {expanded ? 'hide' : 'show'}
        </button>
        {expanded && <ul>{this.getComments(article)}</ul>}
      </div>
    )
  }

  getComments = (article) => {
    return article.comments.map((comment) => (
      <li key={comment.id}>{comment.text}</li>
    ))
  }

  handleBtnClick = () => this.props.toggleState()
}

const CommentsWithExpansion = expansion(Comments)

export default CommentsWithExpansion
