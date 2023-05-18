import { configureStore } from "@reduxjs/toolkit";
import ganreReducer from "./genreSlice"

export default configureStore({
    reducer: {
        genre: ganreReducer
    }
})