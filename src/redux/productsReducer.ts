import { createSlice } from "@reduxjs/toolkit";
import { Product } from "utils/productsArray";



const initialState: Product []= []

// export const fetchProducts = createAsyncThunk<Product[], undefined>(

// )

export const productsReducer = createSlice({
    name: "products",
    initialState,
    reducers: {}
})



export default productsReducer.reducer