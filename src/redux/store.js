import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userInfo';

export const store = configureStore({
  reducer: {
      user:userReducer
  },
})

