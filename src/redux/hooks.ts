import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
// Custom hooks with different names
export const useAppDispatch: () => AppDispatch = useReduxDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
