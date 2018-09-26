import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment, addCommentToArticle } from '../../ac'
import './style.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form className="form">
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleInput}
        />
        <textarea value={this.state.text} onChange={this.handleTextarea} />
        <button onClick={this.saveComment}>Add comment</button>
      </form>
    )
  }

  handleInput = (event) => {
    this.setState({ user: event.target.value })
  }

  handleTextarea = (event) => {
    this.setState({ text: event.target.value })
  }

  saveComment = (event) => {
    event.preventDefault()

    const { addComment, addCommentToArticle } = this.props
    const id = new Date().toString()

    addComment(id, this.state.user, this.state.text)
    addCommentToArticle(this.props.articleId, id)
  }
}

const mapDispatchToProps = {
  addComment,
  addCommentToArticle
}

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
