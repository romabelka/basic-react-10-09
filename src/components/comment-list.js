import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  state = {
    isOpenComments: false
  }
  render() {
    const { comments } = this.props

    return (
      <div>
        {comments && (
          <button onClick={this.handleBtnClickComments.bind(this)}>
            {this.state.isOpenComments ? 'close comments' : 'open comments'}
          </button>
        )}
        {comments &&
          this.state.isOpenComments &&
          comments.map((item) => (
            <Comment
              key={item.id}
              id={item.id}
              user={item.user}
              text={item.text}
            />
          ))}
      </div>
    )
  }

  handleBtnClickComments = () => {
    this.setState({
      isOpenComments: !this.setState.isOpenComments
    })
  }
}

export default CommentList
