import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Post from './Post';
import PostSkeleton from './PostSkeleton';
import {
  loadPostsForSubreddit,
  selectIsLoadingPosts,
  selectPosts,
} from './postsSlice';

function Posts() {
  const { subreddit } = useParams();
  const sub = subreddit || 'popular';

  const dispatch = useDispatch();
  const allPosts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');

  useEffect(() => {
    dispatch(loadPostsForSubreddit(sub));
  }, [dispatch, sub]);

  const [filteredPosts, setFilteredPosts] = useState([]);

  const filterPosts = (posts, searchTerm) => {
    if (!searchTerm || typeof searchTerm !== 'string') {
      return posts;
    }

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.selftext.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  useEffect(() => {
    setFilteredPosts(filterPosts(allPosts, searchTerm));
  }, [searchTerm, allPosts]);

  return (
    <>
      <div className="sm:md:w-full lg:w-3/4">
        {isLoadingPosts &&
          Array.from({ length: 5 }).map((item, idx) => (
            <PostSkeleton key={idx} />
          ))}
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default Posts;
