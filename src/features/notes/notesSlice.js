import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const selectNotes = (state) => state.notes;

export const { addNotes } = notesSlice.actions;

export default notesSlice.reducer;
