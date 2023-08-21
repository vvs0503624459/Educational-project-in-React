// import { AnyAction, createSlice } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


type State = {
    [id:number]:boolean
}
const initialState: State = {
    1 : true,
    2 : true,
}

export const likeReducer = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    removeLike: (state, action) => ({
      ...state,
      [action.payload]: false,
    })
  },
})
export const {addLike, removeLike} = likeReducer.actions
// const likeReducer = (state = initialState, action: AnyAction ) => {
//   switch (action.type) {
//     case "ADD_LIKE":
//       return {
//         ...state,
//         [action.id]:true,
//       }
//     case "REMOVE_LIKE":
//       return {
//         ...state,
//         [action.id]:false,
//       }
//     default:
//       return state
// }
  // V2
  // switch (action.type) {
  //   case "toggle_like":
  //     return {
  //       ...state,
  //       [action.id]:!state[action.id],
  //     }
 
  //   default:
  //     return state
// }
// }

export default likeReducer.reducer