import { SET_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (rangeState = {from: null, to: null}, action) => {
    const { type, day } = action

    return type === SET_RANGE ?
        DateUtils.addDayToRange(day, {from: rangeState.from, to: rangeState.to}) :
        rangeState;
}
