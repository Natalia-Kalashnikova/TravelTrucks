
import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalog/slice.js"
import filterSlice from "./filter/slice.js"

export const store = configureStore({
    reducer: {
        catalog: catalogSlice,
        filter: filterSlice,
    }
})