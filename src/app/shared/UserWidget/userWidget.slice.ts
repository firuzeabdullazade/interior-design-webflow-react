import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/User';

interface UserWidgetState {
  currentUser?: User;
}

const initialState: UserWidgetState = {
  currentUser: undefined,
};

export const userWidgetSlice = createSlice({
  name: 'userWidget',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.currentUser = undefined;
    },
    loadUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { loadUser, logOut } = userWidgetSlice.actions;

export const userWidgetReducer = userWidgetSlice.reducer;
