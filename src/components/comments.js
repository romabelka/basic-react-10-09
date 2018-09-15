import React, { Component } from 'react'

class Comments extends Component {
  state = {
    isOpen: false
  }

  render() {
    const { comments } = this.props

    if (comments) {
      return (
        <div>
          <button onClick={this.handleBtnClick}>
            {this.state.isOpen ? 'Hide' : 'Show'} comments
          </button>
          {this.state.isOpen &&
            comments.map((comment) => (
              <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
              </div>
            ))}
        </div>
      )
    } else {
      return <div>No comments yet</div>
    }
  }

  handleBtnClick = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })
}

export default Comments
