import { SELECT } from '../constants'

const defaultArticles = []

export default (filters = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return filters
  }

  return filters
}
