import { dataAdminSlice } from "./dataAdminSlice";
import { informationSlice } from "./informationSlice";
import { loginDataSlice } from "./loginDataSlice";
import { resumeDataSlice } from './resumeDataSlice';
import { resumeDetailSlice } from './resumeDetailSlice';
import { resumeEditeSlice } from './resumeEditeSlice';

export const { addImage } = informationSlice.actions;
export const { addDataToResumeState } = resumeDataSlice.actions
export const { addDataToResumeDetailState } = resumeDetailSlice.actions
export const { addDataToResumeEditeState, addEditeImage } = resumeEditeSlice.actions
export const { addDataToLoginFirstState, addDataToLoginLastState } = loginDataSlice.actions
export const { addDataToAdminDataState } = dataAdminSlice.actions