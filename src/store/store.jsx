import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./user"


export default configureStore({
    reducer: {
        name: nameReducer
    }
})