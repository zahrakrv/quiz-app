import { createSlice } from '@reduxjs/toolkit';
const initialState: any = {
  question: 0,
  Alldata: [],
  currentData: {},
  numberOfQuestions: { AllQuestion: 0, NumberOfCorrect: 0 },
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    INIT: (state, action) => {
      state.Alldata = action.payload;
      state.currentData = action.payload[state.question];
      state.numberOfQuestions = {
        AllQuestion: action.payload.length,
        NumberOfCorrect: 0,
      };
    },
    NEXT: (state, action) => {
      if (action.payload.flag === true) {
        state.numberOfQuestions = {
          AllQuestion: state.AllData.length,
          NumberOfCorrect: state.NumberOfCorrect + 1,
        };
      }
      state.question = state.question + 1;
      state.CurrentData = state.Alldata[state.question];
    },
  },
});
export const { INIT } = dataSlice.actions;
export const Data = (state: any) => state.dataState;
export default dataSlice.reducer;
