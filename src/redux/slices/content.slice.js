import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/api";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/content");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  case: [],
  design: [],
  data:[],
  values: {
    name: "",
    image: "",
    image_ar: "",
    description: "",
    designType: "",
    wfile: "",
    bfile: "",
    type: "",
    visible: false,
    likes: 0,
    behanceLink: "",
    deibbleLink: "",
    themeForest: "",
    meduimLink: "",
  },
};

export const content = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeContent: (state, action) => {
      state.values[action.payload.name] = action.payload.value;
    },
    resetContent: (state, action) => {
      state.values = initialState.values;
    },
    setContentValues: (state, action) => {
      state.values = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      let data = action.payload;
      let cases = data.filter((ele) => ele.type == "case");
      let design = data.filter((ele) => ele.type == "design");

      state.case = cases;
      state.design = design;
      state.data = data
    });
  },
});

export const { changeContent, resetContent, setContentValues } =
  content.actions;

export default content.reducer;
