import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';


// Custom hooks with different names
export const useAppDispatch: () => AppDispatch = useReduxDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

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
