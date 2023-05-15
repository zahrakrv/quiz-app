import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/form.slice';
import dataReducer from './slices/DataSlice';

const store = configureStore({
  reducer: {
    formState: formReducer,
    dataState: dataReducer,
  },
});
export default store;
console.log(store.getState());
