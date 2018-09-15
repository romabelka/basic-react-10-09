import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isListOpen: false
    }

    toggleOpenList = () =>
      this.setState(({ isListOpen }) => ({ isListOpen: !isListOpen }))

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenList={this.toggleOpenList}
        />
      )
    }
  }
