import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isAuthorized: false,
   user: {
      user_name: '',
      email: '',
      role: '',
   },
   id: '',
   token: '',
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signUp: () => {},
   },
})

export const authActions = authSlice.actions
export default authSlice
