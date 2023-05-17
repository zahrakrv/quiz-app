import { createSlice } from '@reduxjs/toolkit';
import shuffleArrayFunc from '../../lib/Shuffle';

const initialState: any = {
  question: 0,
  Alldata: [],
  currentData: { question: '', items: [], correctItem: '' },
  numberOfQuestions: { AllQuestion: 0, NumberOfCorrect: 0 },
  correctAnswer: -1,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    INIT: (state, action) => {
      const { question, correct_answer, incorrect_answers } =
        action.payload[state.question];

      state.Alldata = action.payload;
      state.currentData = {
        question: question,
        items: [...shuffleArrayFunc([correct_answer, ...incorrect_answers])],
        correctItem: correct_answer,
      };
      state.numberOfQuestions = {
        AllQuestion: action.payload.length,
        NumberOfCorrect: 0,
      };
    },
    NEXT: (state) => {
      const { question, correct_answer, incorrect_answers } =
        state.Alldata[state.question];
      state.question = state.question + 1;
      state.currentData = {
        question: question,
        items: [...shuffleArrayFunc([correct_answer, ...incorrect_answers])],
        correctItem: correct_answer,
      };
    },
    RESET: (state) => {
      state.question = 0;
      state.Alldata = [];
      state.currentData = {};
      state.numberOfQuestions = { AllQuestion: 0, NumberOfCorrect: 0 };
    },
    ChangeNumberOfCorrect: (state) => {
      state.numberOfQuestions.NumberOfCorrect =
        state.numberOfQuestions.NumberOfCorrect + 1;
    },
  },
});

export const { INIT, NEXT, RESET, ChangeNumberOfCorrect } = dataSlice.actions;
export const Data = (state: any) => state.dataState;
export default dataSlice.reducer;
