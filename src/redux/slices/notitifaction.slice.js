import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchNotification = createAsyncThunk(
  "notification/fetchNotification",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/notification");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const notification = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotification.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = notification.actions;
export default notification.reducer;
