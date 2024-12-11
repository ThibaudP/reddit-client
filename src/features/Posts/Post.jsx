import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

function Post({ post, isLoading }) {
  return (
    <>
      <div className="p-4 pl-10 pr-10 shadow-xl md:ml-4 md:mr-4 mb-4 sm:ml-0 sm:mr-0 bg-white flex justify-between">
        <div className="flex-col">
          <p className="text-sm">
            {isLoading ? (
              <Skeleton />
            ) : (
              <Link to={`r/${post.subreddit}`}>r/{post.subreddit}</Link>
            )}
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
            <video src={post.media.reddit_video.fallback_url} controls></video>
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
    </>
  );
}

export default Post;
