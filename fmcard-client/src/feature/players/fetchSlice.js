import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: [],
    reducers: {},
    extraReducers:builder =>  {
        builder.addCase('')
    }
})

export default fetchSlice.reducer;