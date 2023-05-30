import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        filter: ''
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

// this is for dispatch
export const { setFilter } = searchSlice.actions;

// this is for configureStore
export default searchSlice.reducer;
