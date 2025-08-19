import { createSlice } from "@reduxjs/toolkit";

export const loginDataSlice = createSlice({
  name: "loginDataSlice",

  initialState: {
    firstData: null,
    lastData: null,
  },

  reducers: {
    addDataToLoginFirstState: (state, action) => {
      state.firstData = action.payload;
    },
    addDataToLoginLastState: (state, action) => {
      state.lastData = action.payload;
    },
  },
});
