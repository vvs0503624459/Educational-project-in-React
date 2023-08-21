import { AnyAction } from "@reduxjs/toolkit"


type CartState = {
    [id:number]:number
}
const initialState: CartState = {
    1 : 5,
    2 : 5,
}
const cartReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        case "add_to_cart":
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }
     
        default:
            return state
    }
}

    export default cartReducer