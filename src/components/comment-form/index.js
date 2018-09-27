import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { addComment } from '../../ac'
import CommentList from '../comment-list'
import './style.css'

class CommentForm extends PureComponent {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const [{ user, text }, { articleId }] = [this.state, this.props]

    if (user.length && text.length) {
      this.props.addComment({
        comment: { user, text },
        articleId
      })
    }
  }

  render() {
    return (
      <fieldset>
        <legend>add comment</legend>
        <input
          className="comment-name"
          name="user"
          type="text"
          placeholder="name"
          onChange={this.handleChange.bind(this)}
        />
        <textarea
          cols="30"
          rows="10"
          className="comment-text"
          name="text"
          placeholder="Write your comment here"
          onChange={this.handleChange.bind(this)}
        />
        <button
          className="comment-submit"
          onClick={this.handleSubmit.bind(this)}
        >
          send
        </button>
      </fieldset>
    )
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    if (this.state.hasError) return <div>Some Error in this article</div>

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
