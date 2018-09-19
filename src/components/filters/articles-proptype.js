import PropTypes from 'prop-types'

export default {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}
