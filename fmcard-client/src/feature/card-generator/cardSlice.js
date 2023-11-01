import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
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

        const cardToSave = {
            ...data,
            createdBy: JSON.parse(localStorage.getItem('user'))._id

        }
        console.log(cardToSave);
        try {

            const res = await fetch('https://renderz-app.onrender.com/card-generator/save', {
                'method': 'POST',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json',

                },
                'body': JSON.stringify(cardToSave),
            })
            const jsonData = await res.json();
            if (res.status < 200 || res.status >= 300) {
                return rejectWithValue(jsonData);
            }
            return jsonData;

        } catch (err) {
            console.log(err);
            return rejectWithValue({ errorMessage: err });
        }

    }
)

export const deleteCard = createAsyncThunk('card/delete',
    async (data, { rejectWithValue }) => {

        console.log(data);
        try {
            const res = await fetch(`https://renderz-app.onrender.com/card-generator/${data}?_method=DELETE`, {
                'method': 'POST',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json',

                },
                'body': JSON.stringify({ id: data }),
            })
            const jsonData = await res.json();
            if (res.status < 200 || res.status >= 300) {
                return rejectWithValue(jsonData);
            }
            return jsonData;

        } catch (err) {
            console.log(err);
            return rejectWithValue({ errorMessage: err });
        }

    }
)


export const getCard = createAsyncThunk('card/get',
    async (data, { rejectWithValue }) => {
        const res = await fetch('http://localhost:8888/me/my-cards', {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                createdBy: JSON.parse(localStorage.getItem('user'))._id
            })
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
            console.log('pending');
        });
        builder.addCase(saveCard.fulfilled, (state, action) => {
            state.card = action.payload ? { ...action.payload } : {}
            console.log(state.card);
            console.log('result', action.payload);
        });
        builder.addCase(saveCard.rejected, (state, action) => {
            state.card = {};
            console.log('rejected', action.payload);

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
            console.log(action.payload);
        });
        builder.addCase(deleteCard.pending, (state) => {
            console.log('pending...');
        });
        builder.addCase(deleteCard.fulfilled, (state, action) => {

            console.log('fulfilled: ', action.payload);
        });
        builder.addCase(deleteCard.rejected, (state, action) => {

            console.log('rejectedt with data: ', action.payload);
        });
    }

})

export const savedCard = (state) => state.card.card;
export const myCards = (state) => state.card.cards
export default cardSlice.reducer