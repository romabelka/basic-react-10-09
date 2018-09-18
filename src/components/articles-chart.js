import React, { Component } from 'react'
//import d3 from 'd3'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
  render() {
    return <div ref={this.setContainerRef} />
  }

  componentDidUpdate(oldProps) {
    //compare oldProps with this.props
    //update chart inside this.containerRef
  }

  setContainerRef = (ref) => {
    if (ref) {
      this.containerRef = ref
      ///do some d3 charting inside ref
    } else {
      //do some cleanup
    }
  }

  componentWillUnmount() {
    //remove all d3 junk
  }
}

ArticlesChart.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ArticlesChart
