import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment, isOpen } = this.props
    return (
      <div>
        <h3>{comment.user}</h3>
        <button onClick={this.handleBtnClick}>
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && <section>{comment.text}</section>}
      </div>
    )
  }

  handleBtnClick = () => this.props.toggleOpen(this.props.comment.id)
}

export default Comment
