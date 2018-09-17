import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: null
    }

    toggleOpenComments = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      const { isOpen } = this.state

      return (
        <section>
          <button onClick={this.toggleOpenComments.bind(this)}>
            {isOpen ? 'Hide' : 'Show'} comments
          </button>
          {isOpen && <OriginalComponent {...this.props} {...this.state} />}
        </section>
      )
    }
  }
