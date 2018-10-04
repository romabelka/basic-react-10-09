import * as React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac/'

class AddCommentForm extends React.Component {
  state = {
    isShow: false,
    user: '',
    text: ''
  }

  render() {
    const { isShow, user, text } = this.state
    return (
      <div>
        {isShow || <button onClick={this.showForm}>Add Comment</button>}
        {isShow && (
          <form>
            <div>
              <span>User: </span>
              <input
                ref={'user'}
                type="text"
                onChange={this.changeUser}
                value={user}
              />
            </div>
            <div>
              <textarea
                ref={'text'}
                cols="30"
                rows="10"
                onChange={this.changeText}
                value={text}
              />
            </div>
            <button onClick={this.addCommentHandler}>OK</button>
            <button onClick={this.closeForm}>Close</button>
          </form>
        )}
      </div>
    )
  }

  showForm = () => {
    this.setState({ isShow: true })
  }

  closeForm = (ev) => {
    ev.preventDefault()
    this.hideForm()
  }

  hideForm = () => {
    this.setState({ isShow: false })
  }

  addCommentHandler = (ev) => {
    ev.preventDefault()
    let { user, text } = this.state
    let { articleId } = this.props
    this.setState({ text: '' })
    this.hideForm()
    if (user && text) {
      this.props.addComment(articleId, user, text)
    } else alert('user and text mustHave!')
  }
  changeUser = () => {
    this.setState({ user: this.refs.user.value })
  }
  changeText = () => {
    this.setState({ text: this.refs.text.value })
  }
}

export default connect(
  undefined,
  {
    addComment
  }
)(AddCommentForm)
