import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsForSubreddit } from '../../api/reddit';

const initialState = {
  posts: [],
  isLoadingPosts: false,
  failedToLoadPosts: false,
};

export const loadPostsForSubreddit = createAsyncThunk(
  'posts/loadPostsForSubreddit',
  async (subreddit) => {
    const posts = fetchPostsForSubreddit(subreddit);
    return posts;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsForSubreddit.pending, (state) => {
        state.isLoadingPosts = true;
        state.failedToLoadPosts = false;
      })
      .addCase(loadPostsForSubreddit.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.failedToLoadPosts = false;
        state.posts = action.payload;
      })
      .addCase(loadPostsForSubreddit.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.failedToLoadPosts = true;
        console.log(action.error);
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoadingPosts = (state) => state.posts.isLoadingPosts;
export const selectFailedToLoadPosts = (state) => state.posts.failedToLoadPosts;

export default postsSlice.reducer;
