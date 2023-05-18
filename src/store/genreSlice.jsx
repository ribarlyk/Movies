import { createSlice } from "@reduxjs/toolkit";


export const genreSlice = createSlice({
    name: 'currentGenre',
    initialState: {
        ganre: ''
    },

    reducers: {
        ganreSetter: (state, action) => {
            state.ganre = action.payload
        }
    }

})

export const { ganreSetter } = genreSlice.actions
export default genreSlice.reducer