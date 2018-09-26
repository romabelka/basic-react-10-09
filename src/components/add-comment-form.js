import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class AddCommentForm extends Component {
  state = {
    hasError: false
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.hasError && (
          <div style={{ color: 'red' }}>Fields should not be empty!!!</div>
        )}
        Username:
        <input />
        <br />
        Comment:
        <textarea />
        <br />
        <button type="submit">Save</button>
      </form>
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const [input, textarea] = ev.target
    const user = input.value
    const text = textarea.value
    const { articleId } = this.props

    if (user.trim() === '' || text.trim() === '') {
      this.setState({
        hasError: true
      })
    } else {
      this.setState({
        hasError: false
      })
      this.props.addComment({ user, text, articleId })
    }
  }
}

export default connect(
  null,
  { addComment }
)(AddCommentForm)
