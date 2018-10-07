import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import { NavLink } from 'react-router-dom'

export class PaginatorButton extends Component {
  state = {
    pageNumber: 0
  }

  handler = (limit, offset, number) => {
    const { loadAllComments } = this.props
    loadAllComments(limit, offset, number)
  }

  render() {
    const { number, itemsOnPage, itemStartNumber } = this.props
    return (
      <div>
        <NavLink
          onClick={() => this.handler(itemsOnPage, itemStartNumber, number)}
          to={`/comments/${number}`}
          activeStyle={{ color: 'red' }}
        >
          {number}
        </NavLink>
      </div>
    )
  }
}

export default connect(
  null,
  { loadAllComments }
)(PaginatorButton)
