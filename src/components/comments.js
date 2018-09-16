import React, { PureComponent } from 'react'

class Comments extends PureComponent {
  render() {
    const { isCommentOpen, toggleOpenComments } = this.props
    return (
      <div>
        <div className="btn btn-comments">
          Comments{' '}
          <button onClick={toggleOpenComments}>
            {isCommentOpen ? 'closeComments' : 'openComments'}
          </button>
        </div>
        {isCommentOpen && <ul>{this.body}</ul>}
      </div>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
  }

  // handleBtnClick = () =>{
  //     this.setState({
  //         isCommentOpen: !this.state.isCommentOpen
  //     })
  // }
}

export default Comments
