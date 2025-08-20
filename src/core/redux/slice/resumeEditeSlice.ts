import { createSlice } from "@reduxjs/toolkit";

export const resumeEditeSlice = createSlice({
  name: "resumeEditeSlice",

  initialState: {
    resumeEditeData: null,
    editeImage: null
  },

  reducers: {
    addDataToResumeEditeState: (state, action) => {
      // state.resumeEditeData.image = action.payload.image;
      // state.resumeEditeData.resumeName = action.payload.resumeName;
      // state.resumeEditeData.jobTitle = action.payload.jobTitle;
      // state.resumeEditeData.jobDescription = action.payload.jobDescription;
      state.resumeEditeData = action.payload
    },
    addEditeImage: (state, action) => {
      state.editeImage = action.payload
    }
  },
});
