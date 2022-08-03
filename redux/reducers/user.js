import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  userName: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      return {...state, ...action.payload}
    },
    logout: () => {
      return initialState
    }
  } 
})
  
export const { login, logout } = userSlice.actions
export default userSlice.reducer