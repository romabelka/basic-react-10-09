import React, { Component } from 'react'
import './style.css'

class Form extends Component {
  state = {
    user: '',
    text: ''
  }

  handleChangeUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('add comment')
  }

  validate = () => {
    const { user, text } = this.state
    if (user.trim() && text.trim()) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="add-comment">
        <h5 className="add-comment__title">Добавить комментарий:</h5>
        <form
          action="#"
          className="add-comment__form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            name="user"
            className="add-comment__user"
            onChange={this.handleChangeUser}
            value={this.state.user}
          />
          <label htmlFor="comment-text">Текст комментария:</label>
          <textarea
            id="comment-text"
            className="add-comment__text"
            name="text"
            value={this.state.text}
            onChange={this.handleChangeText}
          />
          <button className="add-comment__submit" disabled={!this.validate()}>
            Добавить комментарий
          </button>
        </form>
      </div>
    )
  }
}

export default Form
