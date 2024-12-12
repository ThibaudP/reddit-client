import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsForPost } from '../../api/reddit';

const initialState = {
  comments: {},
  isLoadingComments: false,
  failedToLoadComments: false,
};

export const loadCommentsForPost = createAsyncThunk(
  'comments/loadCommentsForPost',
  async (postPermalink) => {
    const comments = fetchCommentsForPost(postPermalink);
    return comments;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsForPost.pending, (state) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
      })
      .addCase(loadCommentsForPost.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.comments[action.payload[0].parent_id.slice(3)] = action.payload;
      })
      .addCase(loadCommentsForPost.rejected, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = true;
        console.log(action.error);
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const selectIsLoadingComments = (state) =>
  state.comments.isLoadingComments;
export const selectFailedToLoadComments = (state) =>
  state.comments.failedToLoadComments;

export default commentsSlice.reducer;
