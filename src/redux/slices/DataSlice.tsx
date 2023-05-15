import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  question: 0,
  Alldata: [],
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    INIT: (state, action) => {
      state = [...action.payload];
    },
  },
});
export const { INIT } = dataSlice.actions;
export const Data = (state: []) => {
  state.dataState;
};
export default dataSlice.reducer;
