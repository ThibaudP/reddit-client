import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import subsListReducer from '../features/SubsList/subsListSlice';
import commentsReducer from '../features/Comments/commentsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    subsList: subsListReducer,
    comments: commentsReducer,
  },
});

export default store;
