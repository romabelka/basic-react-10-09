import React, { Component } from 'react'
import { addComment } from '../ac'
import { connect } from 'react-redux'

class CommentForm extends Component {
  state = {
    author: '',
    text: ''
  }

  handlerAddComment = () => {
    const { addComment } = this.props
    addComment(this.state.author, this.state.text)
  }

  render() {
    return (
      <div>
        <p>
          Автор:
          <input value={this.state.author} onChange={this.handleAuthorChange} />
        </p>
        <p>
          Текст:
          <textarea value={this.state.text} onChange={this.handleTextChange} />
        </p>
        <p>
          <button onClick={this.handlerAddComment}>Добавить комментарий</button>
        </p>
      </div>
    )
  }

  handleAuthorChange = (ev) => {
    if (ev.target.value.length > 10) return this.setState({ author: '' })

    this.setState({
      author: ev.target.value
    })
  }
  handleTextChange = (ev) => {
    this.setState({
      text: ev.target.value
    })
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
