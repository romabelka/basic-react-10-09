import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponentText extends React.Component {
    state = {
      openComments: false
    }

    handleClickComments = () => {
      this.setState({ openComments: !this.state.openComments })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleClickComments={this.handleClickComments}
        />
      )
    }
  }
