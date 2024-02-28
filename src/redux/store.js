import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import orderSlice from "./slices/order.slice";
import feedbackSlice from "./slices/feedback.slice";
import contentSlice from "./slices/content.slice";
import designTypesSlice from "./slices/designTypes.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    feedback: feedbackSlice,
    content: contentSlice,
    designTypes: designTypesSlice,
  },
});
