import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const getUserData= createAsyncThunk(
  "user/getUserData",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/user/data");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {},
  logedin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logut: (state) => {
      state.logedin = false;
    },
    login: (state) => {
      state.logedin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.logedin = true;
    });
  },
});

export const { logut ,login} = userSlice.actions;

export default userSlice.reducer;
