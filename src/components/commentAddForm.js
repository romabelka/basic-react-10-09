import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'
import comment from './comment'

class CommentAddForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    console.log(this.props)
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
            value={this.state.text}
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
    this.setState({
      user: evt.target.value
    })
  }

  handleChangeComment = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  handleClick = () => {
    this.props.addComment(this.state)
    this.setState({
      user: '',
      text: ''
    })
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentAddForm)
