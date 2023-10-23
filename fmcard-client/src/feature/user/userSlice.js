import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const setAvatar = createAsyncThunk('user/login',
    async (data, { rejectWithValue }) => {

    }
)
export const userCard = createAsyncThunk('user/cards',
    async (data, { rejectWithValue }) => {
        const res = await fetch('http://localhost:8888/me/my-cards', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({ createdBy: '12122122122' })
        })
        const jsonData = await res.json();
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)

//how to send a http get request with payload using fetch ?

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        cards: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userCard.pending, (state) => {
            state.cards = []
        });
        builder.addCase(userCard.fulfilled, (state, action) => {
            state.cards = action.payload?.length > 0 ? [...action.payload] : []
            console.log(action.payload);
        });
        builder.addCase(userCard.rejected, (state, action) => {
            state.cards = [];
            console.log(action.payload);
        });
    }
})

export const userCards = (state) => state.user.cards
export default userSlice.reducer;