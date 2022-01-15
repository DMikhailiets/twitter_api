import { setData } from './../actions.ts'
import myApi from "../../API/myAPI"
import { Dispatch } from 'redux'
import { setDataActionType } from '../actions.ts/simpleReducerActions'

export const getData = () => async (dispatch: Dispatch<setDataActionType>) => {
  try {
    let response = await myApi.getData()
    if (response && response.data) {
        dispatch(setData(response.data))
    }
  } catch (err) {
    console.error(err)}
}