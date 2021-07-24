import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state, { payload }) => {
      state.push(payload);
    },
    deleteNotes: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const selectNotes = (state) => state.notes;

export const { addNotes, deleteNotes } = notesSlice.actions;

export default notesSlice.reducer;
