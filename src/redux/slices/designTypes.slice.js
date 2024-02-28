import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchDesignTypes = createAsyncThunk(
  "designTypes/fetchDesignTypes",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/design-types");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const designTypes = createSlice({
  name: "designTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDesignTypes.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = designTypes.actions;
export default designTypes.reducer;
