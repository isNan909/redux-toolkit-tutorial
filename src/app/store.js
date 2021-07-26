import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notesSlice';
import postsReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    posts: postsReducer,
  },
});

