import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentAddForm extends Component {
  state = {
    user: '',
    comment: ''
  }

  render() {
    return (
      <div>
        <label>
          {' '}
          user:
          <input value={this.state.user} onChange={this.handleChangeUser} />
        </label>
        <label>
          {' '}
          comment:
          <input
            value={this.state.comment}
            type="text"
            onChange={this.handleChangeComment}
          />
        </label>
        <button type="submit" onClick={this.handleClick}>
          add comment
        </button>
      </div>
    )
  }

  handleChangeUser = (evt) => {
    console.log(evt.target.value)
    this.setState({
      user: evt.target.value
    })
  }

  handleChangeComment = (evt) => {
    console.log(evt.target.value)
    this.setState({
      comment: evt.target.value
    })
  }

  handleClick = () => {
    this.props.addComment(this.state)
  }
}

export default connect(
  null,
  { addComment }
)(CommentAddForm)
