import { FILTER, RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (
  filter = { selected: null, range: { from: null, to: null } },
  action
) => {
  switch (action.type) {
    case FILTER:
      return {
        selected: action.payload.map(({ label, value }) => ({ label, value })),
        range: { ...filter.range }
      }
    case RANGE:
      return {
        selected: filter.selected.map(({ label, value }) => ({ label, value })),
        range: DateUtils.addDayToRange(action.payload, filter.range)
      }
    default:
      return filter
  }
}
