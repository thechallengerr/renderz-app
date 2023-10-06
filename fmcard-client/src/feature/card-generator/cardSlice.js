import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    card: {
        player_img: '',
        player_name: '',
        rating: '',
        position: '',
        flag: '',
        background: '',
        club: '',
    },
    cards: []
}

export const saveCard = createAsyncThunk('card/save',
    async (data, { rejectWithValue }) => {
        console.log(data);
        const res = await fetch('https://renderz-app.onrender/card-generator/save', {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'Content-Type': 'application/json',
                // 'credentials': 'include',
            },
            credentials: "include",
            'body': JSON.stringify(
                {
                    player_img: data.player_img,
                    player_name: data.name,
                    rating: data.rating,
                    position: data.position,
                    flag: data.flag,
                    background: data.background,
                    club: data.career.club_img,
                }
            )
        })
        const jsonData = await res.json();
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)


export const getCard = createAsyncThunk('card/get',
    async (data, { rejectWithValue }) => {
        const res = await fetch('https://renderz-app.onrender.com/card-generator/save', {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(data)
        })
        const jsonData = await res.json();
        if (res.status < 200 || res.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(saveCard.pending, (state) => {
            state.card = {}
        });
        builder.addCase(saveCard.fulfilled, (state, action) => {
            state.card = action.payload ? { ...action.payload } : {}
            console.log(action.payload);
        });
        builder.addCase(saveCard.rejected, (state, action) => {
            state.card = {};
            console.log(action.payload.error);
        });
        builder.addCase(getCard.pending, (state) => {
            state.cards = []
        });
        builder.addCase(getCard.fulfilled, (state, action) => {
            state.cards = action.payload?.length > 0 ? [...action.payload] : []
            console.log(action.payload);
        });
        builder.addCase(getCard.rejected, (state, action) => {
            state.cards = [];
            console.log(action.payload.error);
        });
    }

})

export const savedCard = (state) => state.card.card;
export const myCards = (state) => state.card.cards
export default cardSlice.reducer