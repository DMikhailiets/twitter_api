import myApi from '../../API/myAPI'
const initialState = {
    data: null
}

export let simpleReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DATA': {
            return {
                ...state, data: action.data
            }
        }
        default: 
            return state
    }
} 

const setData = (data) => ({type: 'SET_DATA', data})

export let getData = (data) => async (dispatch) => {
    console.log(data)
    debugger
    let response = await myApi.getData()
    if (response) {
        dispatch(setData(response.data))
    }
}

export default simpleReducer