import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const getorderData= createAsyncThunk(
  "order/getorderData",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/order");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getorderData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {  } = orderSlice.actions;

export default orderSlice.reducer;
