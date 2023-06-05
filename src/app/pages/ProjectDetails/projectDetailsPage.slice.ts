import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectGridItem } from '../../../models/Project';

interface ProjectDetailsPageState {
  projectState: object;
  currentProject?: ProjectGridItem;
}

const initialState: ProjectDetailsPageState = {
  projectState: {},
};
export const projectDetailsPageSlice = createSlice({
  name: 'projectDetailsPage',
  initialState: initialState,
  reducers: {
    projectStateLoad: (state, action) => {
      state.projectState = action.payload;
    },
    setCurrentProject: (state, action: PayloadAction<ProjectGridItem>) => {
      state.currentProject = action.payload;
    },
  },
});
export const { projectStateLoad, setCurrentProject } = projectDetailsPageSlice.actions;
export const projectDetailsPageReducer = projectDetailsPageSlice.reducer;
