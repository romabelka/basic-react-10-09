import React, { Component } from 'react'
import { COMMENTS_PAGE_LIMIT } from '../constants'
import { loadCommentsPage, updateCommentsPage } from '../ac'
import { connect } from 'react-redux'

class CommentCollection extends Component {
  static propTypes = {}
  state = { inputPage: 1 }
  inputPageRef = React.createRef()
  render() {
    let { comments } = this.props
    const { page } = this.props
    return (
      <div>
        <div>
          <pre>{JSON.stringify(comments, null, 2)}</pre>
        </div>
        <div>
          <button onClick={this.prevHandler}>Prev</button>
          <input
            ref={this.inputPageRef}
            type="text"
            defaultValue={page}
            onChange={this.changePage}
          />
          <button onClick={this.goPageHandler}>GO</button>
          <button onClick={this.nextHandler}>Next</button>
        </div>
      </div>
    )
  }

  changePage = (ev) => {
    const val = +ev.currentTarget.value
    if (Number.isNaN(val)) {
      ev.currentTarget.value = this.state.inputPage
      return
    }
    this.setState({ inputPage: val })
  }

  goPageHandler = () => {
    const page = this.inputPageRef.current.value
    this.props.goPage(page)
    this.props.updateCommentsPage(page)
  }

  _updatePage(page) {
    this.inputPageRef.current.value = page
    this.props.goPage(page)
    this.props.updateCommentsPage(page)
  }
  prevHandler = () => {
    const page = this.prevPage(this.props.page)
    this._updatePage(page)
  }

  nextHandler = () => {
    let { page, total } = this.props
    page = this.nextPage(page, total)
    this._updatePage(page)
  }

  prevPage(page) {
    page = +page
    return page <= 1 ? 1 : page - 1
  }

  nextPage(page, total) {
    return page * COMMENTS_PAGE_LIMIT > total ? page : page + 1
  }

  componentDidMount() {
    this.props.loadCommentsPage(this.props.page)
  }
  componentDidUpdate() {
    const { comments, page, loadCommentsPage } = this.props
    if (!comments || comments.length === 0) {
      loadCommentsPage(page)
    }
  }
}

export default connect(
  null,
  { loadCommentsPage, updateCommentsPage }
)(CommentCollection)
