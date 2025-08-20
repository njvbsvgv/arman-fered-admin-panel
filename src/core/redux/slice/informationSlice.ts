import { createSlice } from "@reduxjs/toolkit";

export const informationSlice = createSlice({
  name: "informationSlice",

  initialState: {
    image: null,
  },

  reducers: {
    addImage: (state, action) => {
      state.image = action.payload;
    },
  },
});