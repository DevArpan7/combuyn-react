import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo:{},
  token:""
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, value) => {
      state.userInfo = value.payload;
    },
    setToken: (state, value) => {
      state.token = value.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, setToken } = userSlice.actions

export default userSlice.reducer