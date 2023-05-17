import { createSlice } from '@reduxjs/toolkit';
// import {}
const initialState = {
  number: 0,
  category: 0,
  difficulty: '',
  url: '',
};

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit: (state, action) => {
      state.number = action.payload.number;
      state.category = action.payload.category;
      state.difficulty = action.payload.difficulty;
      state.url = `amount=${action.payload.number}&category=${action.payload.category}&difficulty=${action.payload.difficulty}`;
    },
  },
});

export const { submit } = FormSlice.actions;

export const FormSubmit = (state: any) => state.formState;

export default FormSlice.reducer;
