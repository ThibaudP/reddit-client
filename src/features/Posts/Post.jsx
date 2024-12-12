import './Posts.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';
import VoteBlock from './VoteBlock';
import PostFooter from './PostFooter';
import Comments from '../Comments/Comments';

function Post({ post, isLoadingPosts }) {
  const [vote, setVote] = useState(0);
  const [score, setScore] = useState(0);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setScore(post.ups);
  }, [post]);

  const upVote = () => {
    if (vote === 0) {
      setVote(1);
      setScore(score + 1);
    } else if (vote === -1) {
      setScore(score + 2);
      setVote(1);
    } else {
      setScore(score - 1);
      setVote(0);
    }
  };

  const downVote = () => {
    if (vote === 0) {
      setVote(-1);
      setScore(score - 1);
    } else if (vote === 1) {
      setScore(score - 2);
      setVote(-1);
    } else {
      setScore(score + 1);
      setVote(0);
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <div className="p-4 pl-5 pr-10 shadow-xl md:ml-4 md:mr-4 mb-4 sm:ml-0 sm:mr-0 bg-white flex flex-col justify-start rounded-lg">
        <div className="flex">
          <VoteBlock
            upVote={upVote}
            downVote={downVote}
            score={score}
            vote={vote}
          />
          <div className="w-full">
            <p className="text-sm">
              <Link to={`r/${post.subreddit}`}>r/{post.subreddit}</Link>
            </p>
            <h2 className="text-lg font-semibold">
              <a
                href={
                  post.post_hint === 'link'
                    ? post.url
                    : `https://www.reddit.com/${post.permalink}`
                }
              >
                {post.title}
              </a>
            </h2>
            <p className="text-sm">{post.selftext}</p>
            {post.post_hint == 'image' && (
              <img src={post.url} className="object-contain max-w-xl" />
            )}
            {post.is_video && (
              <video
                src={post.media.reddit_video.fallback_url}
                controls
              ></video>
            )}
            {post.post_hint === 'link' && (
              <a
                href={post.url}
                className="text-sm underline text-blue-600 font-semibold visited:text-blue-800"
              >
                {post.url}
              </a>
            )}
          </div>
          {post.post_hint === 'link' && (
            <div className="pt-5 ml-3 min-w-32 max-w-40 flex self-start justify-center">
              {post.thumbnail === 'default' ? (
                <FaLink size={50} />
              ) : (
                <img src={post.thumbnail} />
              )}
            </div>
          )}
        </div>
        <div className="ml-16">
          <PostFooter
            author={post.author}
            createdAt={post.created}
            numberOfComments={post.num_comments}
            toggleComments={toggleComments}
          />
          {showComments && (
            <Comments postPermalink={post.permalink} postId={post.id} />
          )}
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  isLoading: PropTypes.bool,
  post: PropTypes.shape({
    subreddit: PropTypes.string,
    title: PropTypes.string,
    selftext: PropTypes.string,
    url: PropTypes.string,
    is_video: PropTypes.bool,
    thumbnail: PropTypes.string,
    media: PropTypes.object,
    post_hint: PropTypes.string,
    permalink: PropTypes.string,
    ups: PropTypes.number,
  }),
};

export default Post;
