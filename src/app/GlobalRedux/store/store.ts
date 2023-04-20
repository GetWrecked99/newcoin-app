"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { storage } from "./../web-storage/web-storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authSliceReducer } from "../redux-store/auth/auth.slice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  AuthData: authSliceReducer,
});

const presistReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: presistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
