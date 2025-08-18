import { createSlice } from "@reduxjs/toolkit";

export const resumeDataSlice = createSlice({
  name: "resumeDataSlice",

  initialState: {
    resumeDataState: null,
  },

  reducers: {
    addDataToResumeState: (state, action) => {
      state.resumeDataState = action.payload;
    },
  },
});
