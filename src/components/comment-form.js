import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
  state = {
    authorName: '',
    commentText: ''
  }
  handlerAdd = (e) => {
    addComment(this.state)
  }
  handlerChange = (e) => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
  }
  render() {
    const { authorName, commentText } = this.state
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="введите имя"
            name="authorName"
            value={authorName}
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <textarea
            placeholder="введите ваш комментарий"
            name="commentText"
            value={commentText}
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <div>{this.props.authorName}</div>
          <div>{this.props.commentText}</div>
          <button onClick={this.handlerAdd}>Добавить комментарий</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log('-----------', store.addComment.addComment)
  return store.addComment.addComment
}

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm)
