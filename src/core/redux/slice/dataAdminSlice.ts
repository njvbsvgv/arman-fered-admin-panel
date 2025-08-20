import { createSlice } from "@reduxjs/toolkit";

export const dataAdminSlice = createSlice({
  name: "adminDataSlice",

  initialState: {
    adminData: null,
  },

  reducers: {
    addDataToAdminDataState: (state, action) => {
      state.adminData = action.payload;
    },
  },
});
