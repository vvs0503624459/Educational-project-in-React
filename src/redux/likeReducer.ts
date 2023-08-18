import { AnyAction } from "@reduxjs/toolkit"


type State = {
    [id:number]:boolean
}
const initialState: State = {
    1 : true,
    2 : true,
}
const likeReducer = (state = initialState, action: AnyAction ) => {
  switch (action.type) {
    case "ADD_LIKE":
      return {
        ...state,
        [action.id]:true,
      }
    case "REMOVE_LIKE":
      return {
        ...state,
        [action.id]:false,
      }
    default:
      return state
}
 
}

export default likeReducer