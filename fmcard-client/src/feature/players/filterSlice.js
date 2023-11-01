import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase('')
    }
})

export default filterSlice.reducer;