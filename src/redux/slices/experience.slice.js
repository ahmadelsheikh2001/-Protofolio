import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchExperience = createAsyncThunk(
  "experience/fetchExperience",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/experience");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  experience: [],
  certificate: [],
  education: [],
  program: [],
  language: [],
  skills: [],
  trust: [],
};

export const experience = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperience.fulfilled, (state, action) => {
      let data = action.payload
      state.experience = data.filter((ele)=>ele.type == "experience") ;
      state.certificate = data.filter((ele)=>ele.type == "certificate") ;
      state.education = data.filter((ele)=>ele.type == "education") ;
      state.program = data.filter((ele)=>ele.type == "program") ;
      state.language = data.filter((ele)=>ele.type == "language") ;
      state.skills = data.filter((ele)=>ele.type == "skills") ;
      state.trust = data.filter((ele)=>ele.type == "trust") ;
    });
  },
});

export const {} = experience.actions;

export default experience.reducer;
