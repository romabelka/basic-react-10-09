import { APPLY_FILTERS, RESET_FILTERS } from '../constants'

const initialFiltersState = {
  selectedArticles: [],
  selectedRange: {
    from: null,
    to: null
  }
}

export default (filtersState = initialFiltersState, action) => {
  const { type, payload } = action

  switch (type) {
    case APPLY_FILTERS:
      return { ...payload }

    case RESET_FILTERS:
      return { ...initialFiltersState }

    default:
      return filtersState
  }
}

// import { DELETE_ARTICLE, SELECT_ARTICLE, SELECT_RANGE, APPLY_FILTERS, RESET_FILTERS } from '../constants'
//
// const initialFiltersState = {
//   isFiltersApplied: false,
//   selectedArticles: [],
//   selectedRange: {
//     from: null,
//     to: null
//   }
// }
//
// export default (filtersState = initialFiltersState, action) => {
//   const { type, payload } = action
//
//   switch (type) {
//     case SELECT_ARTICLE:
//       return {...filtersState, selectedArticles: payload.selectedArticles}
//
//     case SELECT_RANGE:
//       return {...filtersState, selectedRange: payload.selectedRange}
//
//     case APPLY_FILTERS:
//       return {...filtersState, isFiltersApplied: true}
//
//     case RESET_FILTERS:
//       return {...initialFiltersState}
//
//     case DELETE_ARTICLE:
//       return {...filtersState, selectedArticles: filtersState.selectedArticles.filter(article => article.value !== payload.id)}
//
//     default:
//       return filtersState
//   }
// }
