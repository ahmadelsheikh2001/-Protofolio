import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import orderSlice from "./slices/order.slice";
import feedbackSlice from "./slices/feedback.slice";
import contentSlice from "./slices/content.slice";
import designTypesSlice from "./slices/designTypes.slice";
import experienceSlice from "./slices/experience.slice";
import aboutSlice from "./slices/about.slice";
import resumeSlice from "./slices/resume.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    feedback: feedbackSlice,
    content: contentSlice,
    designTypes: designTypesSlice,
    experience: experienceSlice,
    about: aboutSlice,
    resume: resumeSlice,
  },
});
