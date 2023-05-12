import { createSlice } from '@reduxjs/toolkit';

interface ProjectState {
  imageSrc: string;
  head: string;
}

const initialState: ProjectState = {
  imageSrc: '',
  head: '',
};

export const projectSlice = createSlice({
  initialState: initialState,
  name: 'project',
  reducers: {},
});

export const projectReducer = projectSlice.reducer;
