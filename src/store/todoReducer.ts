import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { todoState, todo } from './types';

const URL = 'https://glacial-castle-07790.herokuapp.com/api/todos';

const initialState: todoState = {
  description: '',
  list: [],
};

export const fetchTodos = createAsyncThunk('fetchTodos', async (parameter: string) => {
  const search = parameter ? `&description__regex=/${parameter}/` : '';
  const response = await axios.get(`${URL}?sort=-createdAt${search}`);
  return response.data;
});

export const addTodos = createAsyncThunk('addTodos', async (parameter: string) => {
  const description = parameter;
  const response = await axios.post(URL, { description });
  return response.data;
});

export const changeStatus = createAsyncThunk('changeStatus', async (parameter: todo) => {
  const item = parameter;
  const response = await axios.put(`${URL}/${item._id}`, { ...item, done: !item.done });
  return response.data;
});

export const removeTodos = createAsyncThunk('removeTodos', async (parameter: string) => {
  const id = parameter;
  await axios.delete(`${URL}/${id}`);
  return id;
});

export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    descriptionChanged(state, action) {
      return { ...state, description: action.payload };
    },
    descriptionCleared(state) {
      return { ...state, description: '' };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => ({ ...state, list: action.payload }))
      .addCase(addTodos.fulfilled, (state, action) => {
        const newList = state.list;
        newList.unshift(action.payload);
        state.description = '';
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        const { _id, done } = action.payload;
        const item = state.list.find((todoItem) => todoItem._id === _id);
        item!.done = done;
      })
      .addCase(removeTodos.fulfilled, (state, action) => {
        const id = action.payload;
        const newList = state.list.filter((todoItem) => todoItem._id !== id);
        return { ...state, list: newList };
      });
  },
});

export const { descriptionChanged, descriptionCleared } = todoReducer.actions;

export default todoReducer.reducer;
