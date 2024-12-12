import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  loadPostsForSubreddit,
  selectIsLoadingPosts,
  selectPosts,
} from './postsSlice';
import Post from './Post';
import PostSkeleton from './PostSkeleton';

function Posts() {
  const { subreddit } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const sub = subreddit || 'popular';

  useEffect(() => {
    dispatch(loadPostsForSubreddit(sub));
  }, [dispatch, sub]);


  return (
    <>
      <div className="md:w-full lg:w-3/4">
        {isLoadingPosts &&
          Array.from({ length: 5 }).map((item, idx) => <PostSkeleton key={idx} />)}
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Posts;
