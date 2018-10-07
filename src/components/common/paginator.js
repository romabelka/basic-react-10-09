import React, { Component } from 'react'
import PaginatorButton from './paginatorButton'

export class Paginator extends Component {
  render() {
    return <div>{this.paginationBody}</div>
  }

  get paginationBody() {
    const { totalLength, itemsOnPage } = this.props
    return (
      <div>
        {Array.apply(0, Array(Math.ceil(totalLength / itemsOnPage))).map(
          function(x, i) {
            return (
              <PaginatorButton
                key={i}
                itemStartNumber={i * itemsOnPage}
                number={++i}
                itemsOnPage={itemsOnPage}
              />
            )
          }
        )}
      </div>
    )
  }
}

export default Paginator
