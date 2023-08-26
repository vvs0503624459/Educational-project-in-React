import { createSlice } from "@reduxjs/toolkit"
import { omit } from "lodash";

type CartState = {
    [id:number]:number
}
const initialState: CartState = {
    1 : 5,
    2 : 5,
}
export const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addProductToCart:(state, action) => ({
        //     ...state,
        //     [action.payload["id"]]: (state[action.payload["id"]] || 0) + Number(action.payload["count"]),
        // }),
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
        removeProductFromCart: (state, action) => {
          return  omit(state,  action.payload.id)
},
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count,
}),

    }
})
export const {addProductToCart,removeProductFromCart, changeProductQuantity } = cartReducer.actions
export default cartReducer.reducer
// const cartReducer = (state = initialState, action: AnyAction) => {

//     switch (action.type) {
//         case "add_to_cart":
//             return {
//                 ...state,
//                 [action.id]: (state[action.id] || 0) + action.count,
//             }
//             case "remove_from_cart":
//             return omit(state, [action.id])
//             case "change_products_in_cart":
//                 return {
//                     ...state,
//                     [action.id]: action.count,
//                 }
//         default:
//             return state
//     }
// }

    // export default cartReducer
