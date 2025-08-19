import { resumeDataSlice } from './slice/resumeDataSlice';
import { configureStore } from "@reduxjs/toolkit";
import { informationSlice } from "./slice/informationSlice";
import { resumeDetailSlice } from './slice/resumeDetailSlice';
import { resumeEditeSlice } from './slice/resumeEditeSlice';
import { loginDataSlice } from './slice/loginDataSlice';

export const store = configureStore({
  reducer: {
    informationState: informationSlice.reducer,
    resumeDataState: resumeDataSlice.reducer,
    resumeDetailState: resumeDetailSlice.reducer,
    resumeEditeDataState: resumeEditeSlice.reducer,
    loginDataSliceState: loginDataSlice.reducer
  },
});
