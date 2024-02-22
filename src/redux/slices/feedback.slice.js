import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const feedBackData = createAsyncThunk(
  "order/feedBackData",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/feedback");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
  value: {
    name: "",
    job: "",
    message: "",
    reactions: [],
  },
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    feeedBackChange: (state, action) => {
      const { name, value } = action.payload;
      state.value[name] = value;
    },
    resetFeedbackValues: (state, action) => {
      state.value = {
        name: "",
        job: "",
        message: "",
        reactions: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(feedBackData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { feeedBackChange ,resetFeedbackValues } = feedbackSlice.actions;

export default feedbackSlice.reducer;
