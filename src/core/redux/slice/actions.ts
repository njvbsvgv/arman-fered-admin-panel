import { informationSlice } from "./informationSlice";
import { resumeDataSlice } from './resumeDataSlice';
import { resumeDetailSlice } from './resumeDetailSlice';
import { resumeEditeSlice } from './resumeEditeSlice';

export const { addImage } = informationSlice.actions;
export const { addDataToResumeState } = resumeDataSlice.actions
export const { addDataToResumeDetailState } = resumeDetailSlice.actions
export const { addDataToResumeEditeState } = resumeEditeSlice.actions