import { createSlice } from "@reduxjs/toolkit";
import { portfolio }  from "../data/data";
const initialState = portfolio;


export const filterReduser = createSlice ({
  name: "filter",
  initialState,
  reducers: {
    all: () => portfolio,
    js: () => portfolio.filter((item) => item.tools.includes("js")),
    animation: () => portfolio.filter((item) => item.tools.includes("animation")),
    api: () => portfolio.filter((item) => item.tools.includes("api")),
    react: () => portfolio.filter((item) => item.tools.includes("react")),
    other: () => portfolio.filter((item) => item.tools.includes("other")),
    game: () => portfolio.filter((item) => item.tools.includes("game")),
    redux: () => portfolio.filter((item) => item.tools.includes("redux")),

  },
});

export const { all, js, animation, api, react, other, game, redux } = filterReduser.actions;
export default filterReduser.reducer;