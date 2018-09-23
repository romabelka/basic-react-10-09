import { SET_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (rangeState = {from: null, to: null}, action) => {
    const { type, day } = action

    if (type === SET_RANGE) {
        DateUtils.addDayToRange(day, rangeState)
        console.log(day)
        return rangeState;
    }
    return rangeState;
}
