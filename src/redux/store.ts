import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slice/articleSlice";
import searchReducer from "./slice/searchSlice";
import sportsReducer from "./slice/sportSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    search: searchReducer,
    sport: sportsReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
