import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  return posts.json();
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, _action) => {
      state.status = 'loading';
    },
      [getPosts.fulfilled]: (state, {payload}) => {
      state.posts = payload;
      state.status = 'sucess';
    },
    [getPosts.rejected]: (state, _action) => {
      state.status = 'failed';
    },
  },
});

export const selectNotes = (state) => state.posts;

export default postSlice.reducer;
