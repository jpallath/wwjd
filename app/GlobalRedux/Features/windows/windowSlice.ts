"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface WindowSlice {
  music: number;
  movies: number;
  comics: number;
  internet: number;
  blog: number;
}

const initialState: WindowSlice = {
  music: 0,
  movies: 0,
  comics: 0,
  internet: 0,
  blog: 0,
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    showWindow: (
      state,
      action: PayloadAction<{ feature: keyof WindowSlice }>
    ) => {
      const { feature } = action.payload;
      if (state.hasOwnProperty(feature)) {
        state[feature] = 1;
      }
    },
    hideWindow: (
      state,
      action: PayloadAction<{ feature: keyof WindowSlice }>
    ) => {
      const { feature } = action.payload;
      if (state.hasOwnProperty(feature)) {
        state[feature] = 0;
      }
    },
  },
});

export const { showWindow, hideWindow } = windowSlice.actions;

export default windowSlice.reducer;
