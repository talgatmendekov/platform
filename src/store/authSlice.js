import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './authService'

export const signup = createAsyncThunk(
   'auth/signup',
   async (signUpData, thunkAPI) => {
      try {
         const response = await authService.signUpRequest(signUpData)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)

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
   extraReducers: {
      [signup.fulfilled]: (state) => {
         state.isAuthorized = false
      },
      [signup.rejected]: (state) => {
         state.isAuthorized = false
      },
   },
})

export const authActions = authSlice.actions
export default authSlice
