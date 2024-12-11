import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import subsListReducer from '../features/SubsList/subsListSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    subsList: subsListReducer,
  },
});
