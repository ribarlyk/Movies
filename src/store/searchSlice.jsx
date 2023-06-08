import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },

    reducers: {
        addData: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { addData } = searchSlice.actions
export default searchSlice.reducer
