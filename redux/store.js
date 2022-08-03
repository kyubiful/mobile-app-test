import { configureStore } from '@reduxjs/toolkit'
import userSlice from '@/redux/reducers/user'

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})