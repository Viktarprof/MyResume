import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "./filterReduser";
import toggleReduser from "./toggleReduser"

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    toggleMenu: toggleReduser,
  },
})
