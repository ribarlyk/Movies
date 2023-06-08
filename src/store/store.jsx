import { configureStore } from "@reduxjs/toolkit";
import ganreReducer from "./genreSlice"
import searchSlice from "./searchSlice";
export default configureStore({
    reducer: {
        genre: ganreReducer,
        search:searchSlice
    }
})