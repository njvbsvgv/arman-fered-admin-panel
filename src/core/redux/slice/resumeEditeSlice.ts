import { createSlice } from "@reduxjs/toolkit";

export const resumeEditeSlice = createSlice({
  name: "resumeEditeSlice",

  initialState: {
    resumeEditeData: null,
  },

  reducers: {
    addDataToResumeEditeState: (state, action) => {
      state.resumeEditeData = action.payload;
    },
  },
});
