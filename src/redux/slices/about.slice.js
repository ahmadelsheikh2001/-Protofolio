import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchAbout = createAsyncThunk(
  "about/fetchAbout",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/about");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const about = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAbout.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = about.actions;

export default about.reducer;
