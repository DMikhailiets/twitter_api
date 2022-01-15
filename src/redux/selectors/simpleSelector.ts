import { AppState } from './../store';
import { createSelector } from 'reselect'

const getData = (state: AppState) => {
  return state.simpleReducer.data
}

export const fetchData = createSelector(getData, (data) => {
  return data
})