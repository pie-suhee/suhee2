import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useId } from 'react';

let user = createSlice({
  name: 'user',
  initialState: {
    name: 'anonymous',
    loginId: 'anonymous',
    role: 'ROLE_ANONYMOUS',
  },
  reducers: {
    changeUser(state, action) {
      state.name = action.payload.name;
      state.loginId = action.payload.loginId;
      state.role = action.payload.role;
    },
  },
});

export let { changeUser } = user.actions;

let age = createSlice({
  name: 'age',
  initialState: {
    age: 0,
  },
  reducers: {
    changeAge(state, action) {
      state.age = action.payload.age;
    },
  },
});

export let { changeAge } = age.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    age: age.reducer,
  },
});
