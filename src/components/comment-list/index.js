import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import connect from 'react-redux/es/connect/connect'
import { addComment } from '../../ac'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  state = {
    username: '',
    text: ''
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  handleAddComment = () => {
    const { addComment } = this.props
    addComment(this.state.username, this.state.text)
  }

  handleChangeUsername = (e) => {
    this.state.username = e.target.value
  }

  handleChangeText = (e) => {
    this.state.text = e.target.value
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    return (
      <div>
        <div className="test__comment-list--body">
          {comments.length ? (
            this.comments
          ) : (
            <h3 className="test__comment-list--empty">No comments yet</h3>
          )}
        </div>
        <div>
          <div>
            <p>Username:</p>
            <input type="text" onChange={this.handleChangeUsername} />
          </div>
          <div>
            <p>Comment:</p>
            <textarea onChange={this.handleChangeText} />
          </div>
          <button onClick={this.handleAddComment}>Add comment</button>
        </div>
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  null,
  { addComment }
)(toggleOpen(CommentList))
