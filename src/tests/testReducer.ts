import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  description: 'Teste',
  list: [
    {
      _id: '12dasd6',
      done: true,
      description: 'Teste 1 True',
      createdAt: '2021-03-05T17:42:45.574Z',
    },
    {
      _id: '345gbsd8',
      done: false,
      description: 'Teste 2 False',
      createdAt: '2021-02-05T17:42:45.574Z',
    },
  ],
};

const testReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export default configureStore({
  reducer: {
    todo: testReducer.reducer,
  },
});
