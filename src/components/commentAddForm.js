import React, { Component } from 'react'
import CommentAdd from './commentAdd'

class CommentAddForm extends Component {
  render() {
    return (
      <div>
        <CommentAdd />
        <button type="submit">save</button>
      </div>
    )
  }
}

export default CommentAddForm
