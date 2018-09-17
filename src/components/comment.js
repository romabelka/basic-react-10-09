import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment, isOpen } = this.props
    return (
      <div>
        <div>
          <h5>{comment.user}</h5>
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && <section>{comment.text}</section>}
      </div>
    )
  }

  handleBtnClick = () => this.props.toggleOpen(this.props.comment.id)
}

export default Comment
