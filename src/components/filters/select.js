import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelectorFilter } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    onChangeHandler: PropTypes.func
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected, onChangeHandler } = this.props
    return (
      <Select
        options={this.options}
        value={selected}
        onChange={onChangeHandler}
        isMulti
      />
    )
  }
}

const mapStateToProps = (storeState) => ({
  articles: storeState.articles,
  selected: storeState.filters.selected
})

const mapDispatchToProps = {
  onChangeHandler: setSelectorFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
