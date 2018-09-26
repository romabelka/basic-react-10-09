import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import toggleOpen from '../../decorators/toggleOpen'
import { addComment } from '../../ac'

import './style.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string,
    addComment: PropTypes.func,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  state = {
    user: '',
    text: ''
  }

  changeHandler = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  isFieldValid = (type) => {
    switch (type) {
      case 'user':
        return this.state.user.length > 1 && this.state.user.length < 16

      case 'text':
        return this.state.text.length > 1 && this.state.text.length < 101

      default:
        return
    }
  }

  isFormValid = () => Object.keys(this.state).every(this.isFieldValid)

  getValidationMessage = (type, message) => {
    return (
      <div className="error-message">
        {this.isFieldValid(type) || !this.state[type].length ? '' : message}
      </div>
    )
  }

  submitHandler = (ev) => {
    ev.preventDefault()
    const { articleId, addComment } = this.props
    addComment({
      articleId,
      user: this.state.user,
      text: this.state.text
    })
    this.setState({
      user: '',
      text: ''
    })
  }

  get form() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.getValidationMessage(
          'text',
          'The message must be at least 2 characters and not more than 100 characters.'
        )}
        <p>
          <label htmlFor="text">Enter your comment:</label>
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.changeHandler}
          />
        </p>
        {this.getValidationMessage(
          'user',
          'The name must be at least 2 characters and not more than 15 characters.'
        )}
        <p>
          <label htmlFor="user">Enter your name:</label>
          <input
            name="user"
            value={this.state.user}
            onChange={this.changeHandler}
          />
        </p>
        <button disabled={!this.isFormValid()}>Submit</button>
      </form>
    )
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'Close form' : 'Add comment'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {isOpen ? this.form : null}
      </div>
    )
  }
}

export default connect(
  null,
  { addComment }
)(toggleOpen(CommentForm))
