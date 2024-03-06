import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchExp = createAsyncThunk(
  "exp/fetchExp",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/exp");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const exp = createSlice({
  name: "exp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExp.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = exp.actions;
export default exp.reducer;
