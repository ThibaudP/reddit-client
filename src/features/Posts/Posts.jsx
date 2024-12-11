import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  loadPostsForSubreddit,
  selectFailedToLoadPosts,
  selectIsLoadingPosts,
  selectPosts,
} from './postsSlice';
import Post from './Post';

function Posts() {
  const { subreddit } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const failedLoadingPosts = useSelector(selectFailedToLoadPosts);
  const sub = subreddit || 'popular';

  useEffect(() => {
    dispatch(loadPostsForSubreddit(sub));
  }, [subreddit]);

  return (
    <>
      <div className="md:w-full lg:w-3/4 xl:w-2/3">
        {isLoadingPosts &&
          Array.from({ length: 5 }).map((item, idx) => {
            <Post key={idx} isLoading={isLoadingPosts} />;
          })}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Posts;
