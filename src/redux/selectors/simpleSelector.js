import { createSelector } from 'reselect'

const getData = (state) => {
    return state.simpleReducer.data
}

export const fetchData = createSelector(getData, (data) => {
    return data
})