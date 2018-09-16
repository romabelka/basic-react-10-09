//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null,
      openCommentsInItemId: null
    }

    _setOrNull = (obj, field, newValue) => {
      const val = obj[field]
      val && (newValue = null)
      return { [field]: newValue }
    }
    toggleOpenItem = (openItemId) =>
      this.setState((curState) => {
        return this._setOrNull(curState, 'openItemId', openItemId)
      })

    toggleOpenComments = (openCommentsInItemId) =>
      this.setState((curState) => {
        return this._setOrNull(
          curState,
          'openCommentsInItemId',
          openCommentsInItemId
        )
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
          toggleOpenComments={this.toggleOpenComments}
        />
      )
    }
  }
