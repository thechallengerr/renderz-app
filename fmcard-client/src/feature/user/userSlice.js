import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const setAvatar = createAsyncThunk('user/login',
    async (data, { rejectWithValue }) => {

    }
)
export const userCard = createAsyncThunk('user/cards',
    async (data, { rejectWithValue }) => {
        const res = await fetch('https://renderz-app.onrender.com/me/my-cards', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({ createdBy: data.createdBy })
        })
        const jsonData = await res.json();
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)

export const updateAvatar = createAsyncThunk('user/updateAvatar',
    async (data, { rejectWithValue }) => {
        const res = await fetch('https://renderz-app.onrender.com/me/update-avatar', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(data)
        })
        const jsonData = await res.json();
        localStorage.setItem('user', JSON.stringify(jsonData))
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)

export const changePassword = createAsyncThunk('user/change-password',
    async (data, { rejectWithValue }) => {
        const res = await fetch('https://renderz-app.onrender.com/auth/change-password', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({ ...data, uid: JSON.parse(localStorage.getItem('user'))._id })
        })
        const jsonData = await res.json();
        if (jsonData.error) { }
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        localStorage.setItem('user', JSON.stringify(jsonData._doc))
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
        builder.addCase(updateAvatar.pending, (state) => {
            console.log('action pending');
        });
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(action.payload);
        });
        builder.addCase(updateAvatar.rejected, (state, action) => {

            console.log("action rejected");
        });
        builder.addCase(changePassword.pending, (state) => {
            console.log('action pending');
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(action.payload);
        });
        builder.addCase(changePassword.rejected, (state, action) => {

            console.log("action rejected");
        });
    }
})

export const userCards = (state) => state.user.cards
export default userSlice.reducer;