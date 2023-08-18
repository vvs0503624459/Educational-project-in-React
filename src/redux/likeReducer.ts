import { AnyAction } from "@reduxjs/toolkit"


type State = {
    [id:number]:boolean
}
const initialState: State = {
    1 : true,
    2 : true,
}
const likeReducer = (state = initialState, action: AnyAction ) => {
  return state
}

export default likeReducer