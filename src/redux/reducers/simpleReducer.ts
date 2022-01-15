import { actionsTypes, simpleReducerActionsType } from './../actions.ts/simpleReducerActions'

interface stateInterface {
  data: any
}
const initialState: stateInterface = {
  data: null
}

export let simpleReducer = (state = initialState, action: simpleReducerActionsType): stateInterface => {
  switch (action.type){
    case actionsTypes.SET_DATA: {
      return {
        ...state, data: action.payload
      }
    }
    default: 
      return state
  }
} 

export default simpleReducer