import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserWidgetState {
  avatarLink: string;
  name: string;
  status: string;
}

const initialState: UserWidgetState = {
  avatarLink: '',
  name: '',
  status: '',
};

interface LoadUserPayload {
  name: string;
  status: string;
}

export const userWidgetSlice = createSlice({
  name: 'userWidget',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.name = '';
      state.status = '';
      state.avatarLink = '';
    },
    loadUser: (state, action: PayloadAction<LoadUserPayload>) => {
      state.name = action.payload.name;
      state.status = action.payload.status;
    },
  },
});

export const { loadUser, logOut } = userWidgetSlice.actions;

export const userWidgetReducer = userWidgetSlice.reducer;
