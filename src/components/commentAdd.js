import React, { Component } from 'react'

class CommentAdd extends Component {
  render() {
    return (
      <div>
        <label>
          {' '}
          user:
          <input onChange={this.handleChangeUser} />
        </label>
        <label>
          {' '}
          user:
          <input type="text" onChange={this.handleChangeComment} />
        </label>
      </div>
    )
  }

  handleChangeUser = (evt) => {
    console.log(evt.target.value)
  }

  handleChangeComment = (evt) => {
    console.log(evt.target.value)
  }
}

export default CommentAdd
