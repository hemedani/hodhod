import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { phoneSlicer } from "./phoneSlicer";

export const store = configureStore({
  reducer: phoneSlicer.reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
