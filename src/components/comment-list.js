import React, { Component } from 'react'
import Comment from './article-comment'
// import accordion from '../decorators/accordion'

class CommentList extends Component {
  state = {
    isOpen: false,
    comments: []
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments || []
    })
  }

  toggleOpenComments = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })

  render() {
    const { isOpen } = this.state

    return (
      <section>
        <button onClick={this.toggleOpenComments.bind(this)}>
          {isOpen ? 'Hide' : 'Show'} comments
        </button>
        <ul>{isOpen && this.comments}</ul>
      </section>
    )
  }

  get comments() {
    const { comments } = this.props

    return comments.map((comment) => (
      <Comment key={comment.id} user={comment.user} text={comment.text} />
    ))
  }
}

// const CommentListWithAccordion = accordionCommentList(CommentList)

export default CommentList
