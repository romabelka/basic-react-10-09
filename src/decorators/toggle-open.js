import React, { Component } from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends Component {
    state = {
      isOpen: null,
      openItemId: null
    }
    toggleOpen = (id = undefined) => {
      this.setState((state) => {
        let { isOpen, openItemId } = state
        const toggleWithId = () => {
          if (openItemId === id) return { isOpen: false, openItemId: null }
          else return { isOpen: true, openItemId: id }
        }
        const toggleWithoutId = () => {
          isOpen = !isOpen
          openItemId = isOpen
          return { isOpen, openItemId }
        }
        return id ? toggleWithId() : toggleWithoutId()
      })
    }
    render() {
      return (
        <OriginalComponent
          toggleOpen={this.toggleOpen}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
