import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { likePush } from '../ac/index'

class LikeCaunter extends Component {
  static propTypes = {
    like: PropTypes.number,
    handleIncrement: PropTypes.func
  }

  render() {
    const { like, handleLike } = this.props
    return (
      <div>
        <h3>{like}</h3>
        <button onClick={handleLike}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  like: storeState.likeCreator
})

const mapDispatchToProps = {
  handleLike: likePush
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeCaunter)
