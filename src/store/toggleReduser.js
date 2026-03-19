import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};


export const toggleReduser = createSlice ({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggle, open, close } = toggleReduser.actions;
export default toggleReduser.reducer;
    