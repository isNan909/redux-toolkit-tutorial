import { createSlice } from '@reduxjs/toolkit';

// fake obj { id: 1, heading: 'heaiding', subheading: 'sdf' }
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
    editNotes: (state, action) => {
      state = state.map((notes) => {
        if (notes.id === action.payload.id) {
          return {
            id: action.payload.id,
            heading: action.payload.heading,
            subheading: action.payload.subheading,
          };
        } else {
          return {
            ...notes,
          };
        }
      });
      return state;
    },
  },
});

export const selectNotes = (state) => state.notes;

export const { addNotes, deleteNotes, editNotes } = notesSlice.actions;

export default notesSlice.reducer;
