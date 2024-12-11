import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularSubs } from '../../api/reddit';

const initialState = {
  subsList: [],
  isLoadingSubs: false,
  failedToLoadSubs: false,
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
      .addCase(loadPopularSubs.pending, (state, action) => {
        state.isLoadingSubs = true;
        state.failedToLoadSubs = false;
      })
      .addCase(loadPopularSubs.fulfilled, (state, action) => {
        state.isLoadingSubs = false;
        state.failedToLoadSubs = false;
        state.subsList = action.payload;
      })
      .addCase(loadPopularSubs.rejected, (state, action) => {
        state.isLoadingSubs = false;
        state.failedToLoadSubs = true;
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
