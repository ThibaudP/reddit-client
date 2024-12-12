import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularSubs } from '../../api/reddit';

const initialState = {
  subsList: [],
  isLoadingSubsList: false,
  failedToLoadSubsList: false,
};

export const loadPopularSubs = createAsyncThunk(
  'subsList/loadPopularSubs',
  async () => {
    const subsList = fetchPopularSubs();
    return subsList;
  }
);

export const subsListSlice = createSlice({
  name: 'subsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPopularSubs.pending, (state) => {
        state.isLoadingSubsList = true;
        state.failedToLoadSubsList = false;
      })
      .addCase(loadPopularSubs.fulfilled, (state, action) => {
        state.isLoadingSubsList = false;
        state.failedToLoadSubsList = false;
        state.subsList = action.payload;
      })
      .addCase(loadPopularSubs.rejected, (state, action) => {
        state.isLoadingSubsList = false;
        state.failedToLoadSubsList = true;
        console.log(action.error);
      });
  },
});

export const selectSubsList = (state) => state.subsList.subsList;
export const selectIsLoadingSubsList = (state) =>
  state.subsList.isLoadingSubsList;
export const selectFailedToLoadSubsList = (state) =>
  state.subsList.failedToLoadSubsList;

export default subsListSlice.reducer;
