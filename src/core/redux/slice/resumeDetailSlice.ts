import { createSlice } from "@reduxjs/toolkit";

export const resumeDetailSlice = createSlice({
  name: "resumeDetailSlice",

  initialState: {
    resumeDetailData: null,
  },

  reducers: {
    addDataToResumeDetailState: (state, action) => {
      state.resumeDetailData = action.payload;
    },
  },
});
