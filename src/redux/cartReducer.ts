import { AnyAction } from "@reduxjs/toolkit"
import { omit } from "lodash";

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
            case "remove_from_cart":
            return omit(state, [action.id])
            case "change_products_in_cart":
                return {
                    ...state,
                    [action.id]: action.count,
                }
        default:
            return state
    }
}

    export default cartReducer