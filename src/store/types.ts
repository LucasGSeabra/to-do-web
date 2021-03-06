import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export interface todo {
  _id: string
  done: boolean
  description: string
  createdAt: string
}

export interface todoState {
  description: string
  list: todo[]
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
