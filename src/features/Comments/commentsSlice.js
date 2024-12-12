import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsForThread } from '../../api/reddit';

const initialState = {
  comments: {},
  isLoadingComments: false,
  failedToLoadComments: false,
};

export const loadCommentsForThread = createAsyncThunk(
  'comments/loadCommentsForThread',
  async (thread) => {
    const comments = fetchCommentsForThread(thread);
    return comments;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsForThread.pending, (state) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
      })
      .addCase(loadCommentsForThread.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.comments[action.payload.id] = action.payload;
      })
      .addCase(loadCommentsForThread.rejected, (state, action) => {
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
