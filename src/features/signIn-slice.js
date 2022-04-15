import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profilePhoto: ""
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signIn(state,action) { 
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo ;
    },
    signOut(state) { 
      state.name = '';
      state.name = '';
      state.name = '';
    },
  }
})

export const signInActions = signInSlice.actions;
export default signInSlice;