import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    players: [],
    nations: [],
    clubs: []
}

export const searchPlayerImg = createAsyncThunk('search/playerImg',
    async (data, { rejectWithValue }) => {
        if (!data) {
            console.log('no name entered');
            return;
        }
        let match = /^[a-zA-Z]*/.test(data)
        let match2 = /\s*/.test(data)
        if (match2) {
            console.log('Wrong input');
        }
        if (match) {
            const res = await fetch('https://renderz-app.onrender.com/players/search', {
                'method': 'POST',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json',
                },
                'body': JSON.stringify({ player_name: data })
            })
            const jsonData = await res.json();
            if (res.status < 200 || res.status >= 300) {
                return rejectWithValue(jsonData);
            }

            // Còn không thì trả về dữ liệu
            return jsonData;

        }
    }
)

export const searchNation = createAsyncThunk('search/nation',
    async (data, { rejectWithValue }) => {
        if (!data) {
            console.log('no name entered');
            return;
        }
        let match = /^[a-zA-Z]*/.test(data)
        let match2 = /\s*/.test(data)
        if (match2) {
            console.log('Wrong input');
        }
        if (match) {
            const res = await fetch('https://renderz-app.onrender.com/card-generator/get-nations', {
                'method': 'POST',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json',
                },
                'body': JSON.stringify({ nation: data })
            })
            const jsonData = await res.json();
            if (res.status < 200 || res.status >= 300) {
                return rejectWithValue(jsonData);
            }

            // Còn không thì trả về dữ liệu
            return jsonData;

        }
    }
)
export const searchClub = createAsyncThunk('search/club',
    async (data, { rejectWithValue }) => {
        if (!data) {
            console.log('no name entered');
            return;
        }
        let match = /^[a-zA-Z]*/.test(data)
        let match2 = /\s*/.test(data)
        if (match2) {
            console.log('Wrong input');
        }
        if (match) {
            const res = await fetch('https://renderz-app.onrender.com/card-generator/get-clubs', {
                'method': 'POST',
                'mode': 'cors',
                'headers': {
                    'Content-Type': 'application/json',
                },
                'body': JSON.stringify({ club_name: data })
            })
            const jsonData = await res.json();
            console.log(jsonData);
            if (res.status < 200 || res.status >= 300) {
                return rejectWithValue(jsonData);
            }
            return jsonData;

        }
    }
)


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(searchPlayerImg.pending, (state) => {
            state.players = []
        });
        builder.addCase(searchPlayerImg.fulfilled, (state, action) => {
            state.players = action.payload?.length > 0 ? [...action.payload] :[]
            console.log(action.payload);
        });
        builder.addCase(searchPlayerImg.rejected, (state, action) => {
            state.players = [];
            console.log(action.payload.error);
        });
        builder.addCase(searchNation.pending, (state) => {
            state.nations = []
        });
        builder.addCase(searchNation.fulfilled, (state, action) => {
            state.nations = action.payload?.length > 0 ? [...action.payload] :[]
            console.log(action.payload);
        });
        builder.addCase(searchNation.rejected, (state, action) => {
            state.nations = [];
            console.log(action.payload.error);
        })
        builder.addCase(searchClub.pending, (state) => {
            state.clubs = []
        });
        builder.addCase(searchClub.fulfilled, (state, action) => {
            state.clubs = action.payload?.length > 0 ? [...action.payload] :[]
            console.log(action.payload);
        });
        builder.addCase(searchClub.rejected, (state, action) => {
            state.clubs = [];
            console.log(action.payload.error);
        })
    }

})



// export const { } = searchSlice.actions;
export const players = (state) => state.search.players;
export const nations = (state) => state.search.nations;
export const clubs = (state) => state.search.clubs;
export default searchSlice.reducer