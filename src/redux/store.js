import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'
import orderSlice from './slices/order.slice'
import feedbackSlice from './slices/feedback.slice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    order:orderSlice,
    feedback:feedbackSlice,



  },
})