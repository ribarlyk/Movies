import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: ''
    },
    reducers: {
        storeName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { storeName } = userSlice.actions;
export default userSlice.reducer;