import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setComment } from '../ac'

class CommentForm extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="введите имя" />
        </div>
        <div>
          <textarea placeholder="введите ваш комментарий" />
        </div>
        <div>
          <button>Добавить комментарий</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (store) => {
  return store
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewComment: (newComment) => dispatch(setComment(newComment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
