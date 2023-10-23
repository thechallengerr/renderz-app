import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../feature/card-generator/searchSlice'
import cardReducer from '../feature/card-generator/cardSlice'
import userReducer from '../feature/user/userSlice'
export const store = configureStore({
  reducer: {
    search: searchReducer,
    card: cardReducer,
    user:userReducer
  },
})