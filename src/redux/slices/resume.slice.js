import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchResume = createAsyncThunk(
  "resume/fetchResume",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/resume");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const resume = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResume.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = resume.actions;

export default resume.reducer;
