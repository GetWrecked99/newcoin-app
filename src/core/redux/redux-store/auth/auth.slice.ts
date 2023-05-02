import { createSlice } from "@reduxjs/toolkit";

import { removeItem } from "@core/services/storage/localStorage";
import { AuthDataType } from "@core/types/authdata-types/auth-data.types";

const initialState: {
  AuthData: null | AuthDataType;
} = { AuthData: null };

const authSlice = createSlice({
  name: "AuthData",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.AuthData = { ...action.payload };
    },
    loggedOut: (state) => {
      state.AuthData = null;
      removeItem("token");
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;
