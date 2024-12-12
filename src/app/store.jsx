import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import subsListReducer from '../features/SubsList/subsListSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    subsList: subsListReducer,
  },
});

export default store;